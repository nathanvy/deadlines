
var timerlist = [
    new CountdownTimer({
	selector: "#clock1",
	tgtdate: new Date("2023-06-10T08:30:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock2",
	tgtdate: new Date("2023-06-24T08:30:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock3",
	tgtdate: new Date("2023-07-15T08:30:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock4",
	tgtdate: new Date("2023-07-30T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock5",
	tgtdate: new Date("2023-06-12T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock6",
	tgtdate: new Date("2023-06-26T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock7",
	tgtdate: new Date("2023-07-16T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock8",
	tgtdate: new Date("2023-07-17T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock9",
	tgtdate: new Date("2023-07-30T12:00:00.000-07:00")
    })
];

timerlist.forEach((x) => x.startTimer());
