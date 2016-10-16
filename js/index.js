$(document).ready(function(){
    $(".translate").click(function() {
        var number = new DigitalNumber($(".digital_number").val());
        $(".string_number").text(number.solve(number.splitIntoCategories()));
    });
});
