import { useState } from "react";

export default function WhatsAppOrderForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sameNumber, setSameNumber] = useState(true);
  const [service, setService] = useState("20L Home Delivery (₹40)");
  const [quantity, setQuantity] = useState("1");
  const [area, setArea] = useState("");
  const [customArea, setCustomArea] = useState("");
  const [newCustomer, setNewCustomer] = useState(false);

  const phone = "919229806435";

  const finalArea = area === "Other" ? customArea : area;

const handleSubmit = () => {
  if (
    !name ||
    !finalArea ||
    (!sameNumber && (!mobile || mobile.length !== 10))
  ) {
    alert("Please fill required details / कृपया सभी जानकारी भरें");
    return;
  }

    const message = `Hi KD Aqua,

*New Water Order*

Name: *${name}*
Quantity: *${quantity} can(s)*
Total: *₹${quantity * 40}*
Address: *${finalArea}*

Service: ${service}
Mobile: ${sameNumber ? "Same as WhatsApp" : mobile}
New Customer: ${newCustomer ? "Yes" : "No"}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        💧 Order Water
      </button>

      {/* Popup */}
      {open && (
        <div
          className="fixed flex items-center justify-center"
          style={{
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.45)",
            zIndex: 999999,
          }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 w-[320px] shadow-2xl border border-blue-200">

            <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
              Order Water / पानी ऑर्डर करें
            </h2>

            {/* Name */}
            <input
              placeholder="Name / नाम"
              className="w-full border border-blue-200 p-2 rounded mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Same number checkbox */}
            <label className="flex items-center gap-2 text-sm mb-2 text-blue-700">
              <input
                type="checkbox"
                checked={sameNumber}
                onChange={() => setSameNumber(!sameNumber)}
              />
              Same as WhatsApp number / वही नंबर उपयोग करें
            </label>

            {/* Mobile input */}
            {!sameNumber && (
              <input
                placeholder="Mobile Number / मोबाइल नंबर"
                className="w-full border border-blue-200 p-2 rounded mb-2"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            )}

            {/* Service */}
            <select
              className="w-full border border-blue-200 p-2 rounded mb-2"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>20L Home Delivery (₹40)</option>
              <option>Self Pickup (₹20)</option>
              <option>Office Supply</option>
              <option>Event Camper Supply</option>
            </select>

            {/* Quantity */}
            <select
              className="w-full border border-blue-200 p-2 rounded mb-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            {/* Area dropdown */}
            <select
              className="w-full border border-blue-200 p-2 rounded mb-2"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Select Area / क्षेत्र चुनें</option>
              <option>Bhind City</option>
              <option>Bus Stand Area</option>
              <option>Etawah Road</option>
              <option>Lahar Road</option>
              <option>Gohad Road</option>
              <option>Housing Colony</option>
              <option value="Other">Other (type manually)</option>
            </select>

            {/* Custom area input */}
            {area === "Other" && (
              <input
                placeholder="Enter Area / पता लिखें"
                className="w-full border border-blue-200 p-2 rounded mb-2"
                value={customArea}
                onChange={(e) => setCustomArea(e.target.value)}
              />
            )}

            {/* New customer */}
            <label className="flex items-center gap-2 mb-4 text-blue-700">
              <input
                type="checkbox"
                checked={newCustomer}
                onChange={() => setNewCustomer(!newCustomer)}
              />
              New Customer / नए ग्राहक
            </label>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg hover:shadow-lg transition"
            >
              Send Order 🚚
            </button>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="w-full mt-2 text-gray-500 text-sm"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}