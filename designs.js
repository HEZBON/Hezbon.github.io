// Select size input
var a,b,color;//height=a,width=b
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e){
   e.preventDefault();//In order to prevent Reloading page while submit
   a = $('#inputHeight').val();//height
   b = $('#inputWeight').val();//width
   makeGrid(a,b);
 })
 // Your code goes here!
 function makeGrid(a,b) {
   $('tr').remove();//remove saved table when inputing new table values
 for (var tr = 1; tr <= a; tr++) {//build table rows
      $('#pixelCanvas').append('<tr class=rows' + tr + '></tr>');
      for (var td = 1; td <= b; td++) {//input cells into table rows
        $('.rows' + tr).append('<td></td>');
 }
 }
 // Select color input
  cell = 'td';
 $(cell).click(function changeColor(){
  color=$('#colorPicker').val();
  if($(this).attr('style')){
    $(this).removeAttr('style');
  }else{
    $(this).attr('style','background-color:' + color);
  }
})
}
