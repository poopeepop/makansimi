image_array = ["1.png","2.png","3.png"];

function reset_to_default() {
    document.getElementById("meal-image").src = "Assets/Simi_Default_Masked.png";
}

function get_random_image() {
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index];
    document.getElementById("meal-image").src = `./Assets/${selected_image}`;
}

// This line basically says, "when the document fully loads, call the
// anonymous function" (i.e. the body of the 'function' keyword). So
// when that anonymous function is called, we know the document is ready,
// and it is the best time to hook up button click events to functions
// that actually does the job.
//
document.addEventListener("DOMContentLoaded", function () {
    // HTML document loaded, now register button event handlers.

    const resetButton = document.getElementById("the-reset-button");
    resetButton.onclick = reset_to_default;

    const randomizeButton = document.getElementById("the-randomize-button");
    randomizeButton.onclick = get_random_image;
});
