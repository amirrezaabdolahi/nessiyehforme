

export function formatedTodayDate(): string {
    const today = new Date();

    const formattedDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(today);


    return formattedDate;
}
