$(document).ready(function(){
    // toggle disabled and enabled
    $('.tog').click (function ()
    {
    $thisCheck = $(this);
    if ($thisCheck.is (':checked'))
    {
        $thisCheck.parent().nextAll().removeAttr("disabled");
        $thisCheck.parent().nextAll().attr( "enabled", "enabled" );    
    }
    else{
        $thisCheck.parent().nextAll().removeAttr("enabled");
        $thisCheck.parent().nextAll().attr( "disabled", "disabled" );
        $thisCheck.parent().parent().find('input').val(null);
        $thisCheck.parent().parent().find('input').css("border-color","gray");
        // $thisCheck.parent().parent().find('input').removeAttr("enabled");
        // $thisCheck.parent().parent().find('input').attr( "disabled", "disabled" );
        $thisCheck.parent().parent().find('input').prop('checked', false);
        if($thisCheck.parent().parent().hasClass('s'))
            {
                $(".text").attr( "disabled", "disabled" );
                $(".text").val(null);
            }
            if($thisCheck.parent().parent().hasClass('t'))
            {
                $("#numperc").attr( "disabled", "disabled" );
                $("#numInt").attr( "disabled", "disabled" );
            }   
    }
    });
  
//  validation to max length be 2  
    $("#two").keyup(function (e){
        $len=$("#two").val();
        if ($len.length > 2)
        {
            e.preventDefault();
            $(this).val(99);
            $(this).css("border-color","red");
        }
        else{
            $(this).css("border-color","gray"); 
        }
    });

//  validation to max length be 5
    $("#five").keyup(function (e){
        $len=$("#five").val();
        if ($len.length > 5)
        {
            e.preventDefault();
            $(this).val(99999);
            $(this).css("border-color","red");
        }
        else{
            $(this).css("border-color","gray");
        }
    });

    // validation in text to max length be 50
    $(".text").keyup(function (e){
        $len=$(this).val();
        if ($len.length > 50)
        {  
            e.preventDefault();
            $(this).css("border-color","red");
        }
        else{
            $(this).css("border-color","gray");
        }
    });

//  validation to max number length 5 && number be integer
    $("#numInt").keyup(function (e){
        $len=$("#numInt").val();
        if ($len.length > 5 || $len %1 !=0)
        {  
            e.preventDefault();
            $(this).val(99999);
            $(this).css("border-color","red");
        }
        else{
            $(this).css("border-color","gray");    
        }
    });

  //  validation to max number be 100  
    $("#numperc").keyup(function (e){
        $len=$("#numperc").val();
        if ($len > 100 )
        {
            e.preventDefault();
            $(this).val(100);
        }
        else{
            $(this).css("border-color","gray"); 
        }
    });
//check checkbox
    $('.check').click (function ()
    {
        $thisCheck = $(this); 
        if ($thisCheck.is (':checked'))
        {
            $thisCheck.next().children().removeAttr("disabled");
            $thisCheck.next().children().attr( "enabled", "enabled" );  
        }
        else{
            $thisCheck.next().children().removeAttr("enabled");
            $thisCheck.next().children().attr( "disabled", "disabled" );   
            $thisCheck.next().children().val(null);
        }
    });

    //check radio
    $('.radio').click (function ()
    {
        $thisCheck = $(this);
        if ($thisCheck.is (':checked'))
        {
            $thisCheck.next().children().removeAttr("disabled");
            $thisCheck.next().children().attr( "enabled", "enabled" );
            if($thisCheck.next().children().is('#numInt'))
            {
                $("#numperc").attr( "disabled", "disabled" );
                $("#numperc").val(null);
                $("#numperc").css("border-color","gray");
            }
            if($thisCheck.next().children().is('#numperc'))
            {
                $("#numInt").attr( "disabled", "disabled" );
                $("#numInt").val(null);
                $("#numInt").css("border-color","gray");
            }    
        }
        else{
            $thisCheck.next().children().removeAttr("enabled");
            $thisCheck.next().children().attr( "disabled", "disabled" );   
        }
    });   
});