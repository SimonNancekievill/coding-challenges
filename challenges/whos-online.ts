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
    username: "Marco",
    status: "online",
    lastActivity: 2,
  },
  {
    username: "Simon",
    status: "online",
    lastActivity: 52,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function Status(persons: Person[]) {
  const overview: { [key: string]: string[] } = {
    online: [],
    offline: [],
    away: [],
  };
  persons.forEach((person) => {
    if (person.status === "online" && person.lastActivity <= 10) {
      return overview?.online?.push(person.username);
    }
    if (person.status === "online" && person.lastActivity > 10) {
      return overview?.away?.push(person.username);
    } else {
      return overview?.offline?.push(person.username);
    }
  });
  return console.log(overview);
}

Status(persons);
