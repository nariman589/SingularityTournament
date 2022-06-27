import AlertMessage from "./alert";

export default function JoinTourney(id) {
  return (
    <button
      onClick={() => {
        join(id);
      }}
      className="double-border-button"
    >
      Join
    </button>
  );
}

async function join(id) {
  try {
    const token = sessionStorage.getItem("token");
    const req = await fetch(
      `http://localhost:8189/api/v1/app/tournament/join/${id.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    AlertMessage("You are added!", "success");
  } catch {
    console.log("error");
  }
}
