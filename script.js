$(document).ready(function(){
  // When size is submitted by the user, call makeGrid()
  // Creat makeGrid function to submit an input then clear previous table &
  // show the new submission, then add a colour.
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    // // We define the variable color, height and width inputs

    var rows = $('#inputHeight').val();
    var cols = $('#inputWidth').val();

// Create a table rows and columns based on the user input which is restricted between 1 to 100
       for (var i = 1; i <= rows; i++) {
         $('table').append('<tr></tr>');
         var tt = ''
         for (var j = 1; j <= cols; j++); {
           for (var k = 0; k <= cols; k++) {
             tt += '<td></td>'
           }
           $('tr:last').append(tt);
           $('td').attr("class", 'square');
         }

       }
       grid.preventDefault();

    // Customizing the color  
       $('#pixelCanvas').on('click', '.square', function() {
         var paint = $('#colorPicker').val();
         $(this).css('background-color', paint);
       });

       $('#toggleBtn').click('.pixelCanvas',function (){
    $('td').toggleClass('grid_Toggle');
});
  });
});
