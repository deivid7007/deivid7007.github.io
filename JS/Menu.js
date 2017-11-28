var n = 0;
var main_menu = 1;
var colorPaleteFunction = 1;

$(document).ready(function ()
{
    $("#ExitButton").click(function ()
    {
        window.open('https://deivid7007.github.io/','_self');
        if(confirm("Are you sure you want to close the page ?"))
        {
            window.close();
        }
    });

    $('#menu-icon').click(function () {
    	var tools = $('#tools_menu');
    	if (n === 0 ) {
    		tools.css('display','none');
    		n = 1;
    	}
    	else
    	{
    		tools.css('display', 'inline-block');
    		n = 0
    	}
    });
    $('#SaveButtonIcon').click(function(e)
    {
        if(confirm("Are you sure you want to save the page ?"))
        {
            var canvasURL = ($('#canvas')[0]).toDataURL("image/png").replace("image/png","image/octet-stream");
            window.open(canvasURL);
        }
    });

    $('#SaveButton').click(function(e)
        {
            if(confirm("Are you sure you want to save the page ?"))
            {
                var canvasURL = ($('#canvas')[0]).toDataURL("image/png").replace("image/png","image/octet-stream");
                window.open(canvasURL);
            }
        });

    $("#file").click(function () 
        {
            if (main_menu === 1 ) {
                $("#sub-menu").slideDown(400);
                main_menu = 2;
            }
            else if (main_menu === 2) {
                $("#sub-menu").slideUp(400);
                main_menu = 1;
            }
        });

     $("#edit").click(function () {
            if (main_menu === 1 ) {
                $("#sub-menu-edit").slideDown(400);
                main_menu = 2;
            }
            else if (main_menu === 2) {
                $("#sub-menu-edit").slideUp(400);
                main_menu = 1;
            }
    });

    $("#color").click(function () { 
        if (colorPaleteFunction === 1 ) {
            $('#colors').css('display','none');
            colorPaleteFunction = 2;
        }
        else if (colorPaleteFunction === 2) 
        {
            $('#colors').css('display', 'inline-block');
            colorPaleteFunction = 1;
        }
    });
   
    
});
