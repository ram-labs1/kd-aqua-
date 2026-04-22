import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [customers, setCustomers] = useState([]);
  const [deliveryState, setDeliveryState] = useState({});
  const [selectedArea, setSelectedArea] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");

    if (!auth) {
      router.push("/admin-login");
    }
  }, [router]);

  useEffect(() => {
    async function loadData() {
      const customersRes = await fetch("/api/sheet");
      const customersData = await customersRes.json();

      if (customersData.success) {
        setCustomers(customersData.data.slice(1));
      }

      const todayRes = await fetch("/api/getTodayDeliveries");
      const todayData = await todayRes.json();

      if (todayData.success) {
        const map = {};

        todayData.data.forEach((row) => {
          map[row[1]] = {
            visited: row[4] === "YES",
            delivered: row[5] === "DELIVERED",
            note: row[6] || "",
          };
        });

        setDeliveryState(map);
      }
    }

    loadData();
  }, []);

  const areas = [
    "ALL",
    ...new Set(customers.map((row) => row[2])),
  ];

  const handleVisitedToggle = (row) => {
    const id = row[0];

    setDeliveryState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        visited: !prev[id]?.visited,
      },
    }));
  };

  const handleDeliveredToggle = (row) => {
    const id = row[0];

    setDeliveryState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        delivered: !prev[id]?.delivered,
        visited: true,
      },
    }));
  };

  const handleNoteChange = (id, note) => {
    setDeliveryState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        note,
      },
    }));
  };

  const saveEntry = async (row) => {
    const entry = deliveryState[row[0]] || {
      visited: false,
      delivered: false,
      note: "",
    };

    await fetch("/api/addDelivery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: row[0],
        name: row[1],
        area: row[2],
        cans: Number(row[5]),
        amount: Number(row[4]) * Number(row[5]),
        visited: entry.visited || false,
        status: entry.delivered
          ? "DELIVERED"
          : entry.visited
          ? "NOT DELIVERED"
          : "PENDING",
        note: entry.note || "",
      }),
    });

    alert(`${row[1]} saved`);
  };

  const filteredCustomers = customers
    .filter((row) =>
      selectedArea === "ALL"
        ? true
        : row[2] === selectedArea
    )
    .filter((row) =>
      row[1]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      row[3].includes(searchTerm)
    );

  const activeCustomers = customers.filter(
    (row) => row[7] === "Yes"
  );

  const visitedCustomers = activeCustomers.filter(
    (row) => deliveryState[row[0]]?.visited
  );

  const deliveredCustomers = activeCustomers.filter(
    (row) => deliveryState[row[0]]?.delivered
  );

  const notDeliveredCustomers = visitedCustomers.filter(
    (row) => !deliveryState[row[0]]?.delivered
  );

  const notVisitedCustomers =
    activeCustomers.length - visitedCustomers.length;

  const expectedCans = activeCustomers.reduce(
    (sum, row) => sum + Number(row[5] || 1),
    0
  );

  const deliveredCans = deliveredCustomers.reduce(
    (sum, row) => sum + Number(row[5] || 1),
    0
  );

  const remainingCans =
    expectedCans - deliveredCans;

  return (
    <div style={{ padding: 15, maxWidth: 600, margin: "auto" }}>
      <button
        onClick={() => {
          localStorage.removeItem("admin-auth");
          window.location.href = "/admin-login";
        }}
        style={{
          float: "right",
          background: "#ff4d4f",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
        }}
      >
        Logout
      </button>

      <h2>Today's Delivery Dashboard</h2>

      <div
        style={{
          background: "#f8fafc",
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <strong>Total Customers:</strong>{" "}
        {activeCustomers.length}
        <br />

        <strong>Visited:</strong>{" "}
        {visitedCustomers.length}
        <br />

        <strong>Delivered:</strong>{" "}
        {deliveredCustomers.length}
        <br />

        <strong>Not Delivered:</strong>{" "}
        {notDeliveredCustomers.length}
        <br />

        <strong>Not Visited:</strong>{" "}
        {notVisitedCustomers}

        <hr />

        <strong>Expected Cans:</strong>{" "}
        {expectedCans}
        <br />

        <strong>Delivered Cans:</strong>{" "}
        {deliveredCans}
        <br />

        <strong>Remaining Cans:</strong>{" "}
        {remainingCans}
      </div>

      <input
        placeholder="Search name or phone..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 10,
        }}
      />

      <select
        value={selectedArea}
        onChange={(e) =>
          setSelectedArea(e.target.value)
        }
        style={{
          width: "100%",
          marginBottom: 15,
          padding: 8,
        }}
      >
        {areas.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      {filteredCustomers.map((row) => {
        const state =
          deliveryState[row[0]] || {};

        return (
          <div
            key={row[0]}
            style={{
              border: "1px solid #ddd",
              padding: 14,
              marginBottom: 12,
              borderRadius: 12,
              background: "#fff",
            }}
          >
            <strong>{row[1]}</strong>

            <div>{row[2]}</div>

            <div>{row[3]}</div>

            <div>Qty: {row[5]} cans</div>

            <label>
              <input
                type="checkbox"
                checked={state.visited || false}
                onChange={() =>
                  handleVisitedToggle(row)
                }
              />
              Mark Visited
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                checked={state.delivered || false}
                onChange={() =>
                  handleDeliveredToggle(row)
                }
              />
              Mark Delivered
            </label>

            <input
              placeholder="Add note..."
              value={state.note || ""}
              onChange={(e) =>
                handleNoteChange(
                  row[0],
                  e.target.value
                )
              }
              style={{
                width: "100%",
                marginTop: 6,
                padding: 6,
              }}
            />

            <button
              onClick={() =>
                saveEntry(row)
              }
              style={{
                marginTop: 8,
                background: "#0070f3",
                color: "white",
                padding: 8,
                borderRadius: 6,
                width: "100%",
              }}
            >
              Save
            </button>

            <button
              onClick={async () => {
                const phone = row[3];
                const customerId = row[0];
                const name = row[1];

                const res = await fetch(
                  `/api/getMonthlySummary?customerId=${customerId}`
                );

                const data = await res.json();

                const month = new Date().toLocaleString(
                  "en-GB",
                  {
                    month: "long",
                    year: "numeric",
                  }
                );

                const message = `KD Aqua Monthly Summary (${month})

Customer: ${name}
Total Cans Delivered: ${data.cans}
Total Amount: ₹${data.amount}

Thank you for choosing KD Aqua 💧`;

                const encodedMessage =
                  encodeURIComponent(message);

                window.open(
                  `https://wa.me/91${phone}?text=${encodedMessage}`,
                  "_blank"
                );
              }}
              style={{
                marginTop: 6,
                background: "#25D366",
                color: "white",
                padding: "6px",
                borderRadius: "6px",
                width: "100%",
              }}
            >
              Send Monthly WhatsApp Bill
            </button>
          </div>
        );
      })}
    </div>
  );
}
