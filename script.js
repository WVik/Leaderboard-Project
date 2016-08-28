// Store some initial entries. 

var table = [

{Name:"John Smith", Score:"50", Time:"14"},
{Name:"Tyler Red", Score:"55", Time:"15"},
{Name:"Collin Michaels", Score:"60", Time:"13"},
{Name:"Tim Wool", Score:"60", Time:"17"},
{Name:"Joshua Demon", Score:"67", Time:"16"},
{Name:"Matt  Remos", Score:"78", Time:"20"},

]

// Populate the stored entries in the table.
var rows;

for(rows =0; rows<table.length;rows++){
   $('table').append('<tr><td></td><td></td><td></td></tr>');
}
 
var flag=1;

// Display the table.

display();



$('table tr:even').css('background-color', '#ddf3ca');
$('table tr:odd').css('background-color', '#7bbf41');

// The following function is to compare the entries to sort the table. Selector is one of 'Name', 'Score', 'Time'.

function sort(selector){

flag=flag*(-1)

for(i=0;i<table.length-1;i++){

	for(j=0;j<table.length-i-1;j++)
       

	{
           if( flag==1?  table[j][selector] < table[j+1][selector] : table[j][selector] > table[j+1][selector])
		{
		    temp=table[j];
			table[j]=table[j+1];
			table[j+1]=temp;
        
		}

	}
}
display();
}


//Definition of display function.

function display(){

for(var i=0; i<table.length; i++)
  {
	$('table tr').eq(i+1).find('td').eq(0).html(table[i].Name);
	$('table tr').eq(i+1).find('td').eq(1).html(table[i].Score);
	$('table tr').eq(i+1).find('td').eq(2).html(table[i].Time);
  }

}

  
 // Function to sort the table when the user clicks the table heading. 'button' is the class of the table head. 
         
	     $('button').click(function(){
		 var enteredName = document.getElementById('enteredName').value;
		 var enteredScore = document.getElementById('enteredScore').value;
		 var enteredTime = document.getElementById('enteredTime').value;
		 document.getElementById('enteredTime').value = '';
		 document.getElementById('enteredScore').value='';
		 document.getElementById('enteredName').value = '';
	     $('table').append('<tr><td></td><td></td><td></td></tr>');
         
         display();
         $('table tr:last').find('td').eq(0).html(enteredName);
         $('table tr:last').find('td').eq(1).html(enteredScore);
         $('table tr:last').find('td').eq(2).html(enteredTime);
         table.push({Name:enteredName, Score:enteredScore, Time:enteredTime});
         display();

         $('table tr:even').css('background-color', '#ddf3ca'); 
		 $('table tr:odd').css('background-color', '#7bbf41');
     
	    });
   










