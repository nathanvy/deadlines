
var timerlist = [
    new CountdownTimer({
	selector: "#clock4",
	tgtdate: new Date("2023-07-30T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock7",
	tgtdate: new Date("2023-07-22T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock8",
	tgtdate: new Date("2023-07-23T23:59:00.000-07:00")
    }),
    new CountdownTimer({
	selector: "#clock9",
	tgtdate: new Date("2023-07-30T10:00:00.000-07:00")
    })
];

timerlist.forEach((x) => x.startTimer());
