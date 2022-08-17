function init() {
    console.log('window really loaded');

    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatusDisplay = document.getElementById("flightStatus");
    const spaceShuttleHeightValue = document.getElementById("spaceShuttleHeight");

    // Takeoff Button
    takeoffButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            console.log('takeoff button was pressed and confirmed');

            // The flight status should change to "Shuttle in flight."
            flightStatusDisplay.innerHTML = "Shuttle in flight.";

            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            document.getElementById("shuttleBackground").style.backgroundColor = "#0000ff";

            // The shuttle height should increase by 10,000 miles.
            spaceShuttleHeightValue.innerHTML = "10,000";
        } else {
            console.log('takeoff button was pressed and canceled');
        }
    });

    // Land Button
    landingButton.addEventListener("click", function (event) {
        if (window.confirm("The shuttle is landing. Landing gear engaged.")) {
            console.log('land button was pressed and confirmed');
            // The flight status should change to "The shuttle has landed."
            flightStatusDisplay.innerHTML = "The shuttle has landed.";

            // The background color of the shuttle flight screen should change from blue to green.
            document.getElementById("shuttleBackground").style.backgroundColor = "#008000";

            // The shuttle height should go down to 0.
            spaceShuttleHeightValue.innerHTML = "0";
        } else {
            console.log('land button was pressed and canceled');
        }
    });

    // Abort Mission Button
    abortButton.addEventListener("click", function (event) {
        // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        if (window.confirm("Confirm that you want to abort the mission.")) {
            console.log('abort button was pressed and confirmed');
            // The flight status should change to "Mission aborted."
            flightStatusDisplay.innerHTML = "Mission aborted.";

            // The background color of the shuttle flight screen should change from blue to green.
            document.getElementById("shuttleBackground").style.backgroundColor = "#FF0000";

            // The shuttle height should go to 0.
            spaceShuttleHeightValue.innerHTML = "0";
        } else {
            console.log('abort button was pressed and canceled');
        }
    });
}



window.addEventListener("load", init);