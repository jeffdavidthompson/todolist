$(function() {


  //
  /*  Initial setup */
  //
  var $list, $newItemForm, $newItemButton;
  /*  empty string to clear input field with*/
  var item = '';                                 
  $list = $('ul');                               
  $newItemForm = $('.newItemForm');              
  $newItemButton = $('.newItemButton');         


  //
  /*  Show the add button, hide form, and swap that when clicked*/
  //
  $newItemButton.show();                         
  $newItemForm.hide();                           
  $('.showForm').on('click', function() {        
    $newItemButton.hide();                       
    $newItemForm.show();                         
  });


  //
  /* Add a new Item */
  //
  $newItemForm.on('submit', function(e) {       // When a new item is submitted
    e.preventDefault();                         // Prevent form being submitted
    var text = $('input:text').val();           // Get value of text input
    $list.append('<li>' + text + '</li>');      // Add item to end of the list
    $('input:text').val('');                    // Empty the text input
  });


  //
  /*  Click to remove items from list*/
  //
  $list.on('click', 'li', function() {
    var $this = $(this);
      $this.remove();   
  });

});