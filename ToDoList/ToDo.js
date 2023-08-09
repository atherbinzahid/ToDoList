
$(function(){
   
    var InnerHtml = localStorage.getItem("InnerHtml");
    $('#AppendToDoListHere').html('');
    $('#AppendToDoListHere').html(InnerHtml);

})


$('.input').on('keyup',function(e){
    
    if(e.keyCode == 13){
        AddNEdit();
    }
  
});


$('#AddBtn').on('click',function(e){
 
    AddNEdit();
  
});


function Edit(Id){
   
    $('#AddBtn').text('Update');
    $('#FunctionType').val('Update');
    $('#EditID').val(Id);
    var EditContent = $('#Content_'+Id).text();
    $('.input').val(EditContent);

}

function Del(Id){
   
    $('#EditID').val(Id);
    $('#DeleteModal').modal('show');

}

function Delete(){
    var DynamicID = $('#EditID').val();
    $('#Item_'+ DynamicID).remove();
    $('#EditID').val('');
    $('#DeleteModal').modal('hide');
    SetLocalStorage();
}

function AddNEdit(){
    var Html = ""
    var Type = $('#FunctionType').val();
        
            var ToDoListItem = $('.input').val();

            if(Type == "Add"){
                
                var DynamicID = $('.Items').length;
                Html+= '<div id="Item_'+ DynamicID +'" class="Items d-flex justify-content-between mt-1">';
                Html+= '<div class="Content">';
                Html+= '<span id="Content_'+ DynamicID +'">'+ ToDoListItem +'</span>';
                Html+= '</div>';
                Html+= '<div class="ActBtns">';
                Html+= '<button class="EditBtn" onclick="Edit('+ DynamicID +');">Edit</button>';
                Html+= '<button class="DelBtn ms-1" onclick="Del('+ DynamicID +');">Delete</button>';
                Html+= '</div>';
                Html+= '</div">';

                $('#AppendToDoListHere').append(Html);
                $('.input').val('');

        }
        else{

            var DynamicID = $('#EditID').val();
            $('#Content_'+DynamicID).text(ToDoListItem);
            $('.input').val('');
            $('#FunctionType').val('Add');
            $('#AddBtn').text('Add');
        }

        SetLocalStorage();
}

function SetLocalStorage(){
   var InnerHtml = $('#AppendToDoListHere').html();
    localStorage.setItem("InnerHtml", InnerHtml);
}