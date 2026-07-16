interface Person {
  username: string;
  status: string;
  lastActivity: number;
}

const persons: Person[] = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function Status() {
  let overview = {};

  const online = persons.map((person) => {
    if (person.status === "online" && person.lastActivity <= 10) {
      return (overview = {
        online: [`${person.username}`],
      });
    }
    if (person.status === "online" && person.lastActivity > 10) {
      return (overview = {
        away: [`${person.username}`],
      });
    } else {
      return (overview = {
        offline: [`${person.username}`],
      });
    }
  });
}
