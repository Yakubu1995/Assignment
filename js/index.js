
// Function to display a welcome message
function displayWelcomeMessage() {
    alert("Welcome to the Bank Transfer App!");
}
displayWelcomeMessage();

function comfirmYes () {
    var response = prompt('Please insert your card by typing yes');
    if (response === null) {
        //user cancelled the prompt
        alert ("prompt cancelled");
    } else if (response.toLowerCase() === "yes") {
        //userentered "yes", do something here
        console.log("user comfirmed yes");
    } else {
        //user entered something other than 'yes', reject input
        alert("Invalid input. Please enter 'yes' to continue.");
        comfirmYes();  //recursively call the function untill user enters "yes"
    }
}
comfirmYes () 

function promptTransactionPin () {
     Pin = prompt ("enter your pin");
    if (Pin <= 0) {
        alert("Invalid pin. 'Transaction aborted'.");
        return home;
    } else {
        return true;
    }
}
promptTransactionPin ();

function TransactionType() {

    var response = prompt("type 1 to witdraw\ntype 2 to transfer");
        if ( response !=2 ) {
            alert ("service not available");
            return home;
        } else  {
        return TransactionType;
    } 
    
}
TransactionType();

function ReceiversAccount() {
    // let receiver bank acc == 0000001212 
    var receiver = prompt("Pleas enter receivers account number");
    if (receiver != '0000001212') { 
        alert("invalid account number");
        return home;
    } else {
        return true;
    }
}
ReceiversAccount();

function confirmReceiversBank () {
    var confirmreceiversbank = prompt ("Pleas select receivers bank\n1.uba\n2.access\n3.gtbank");
    if (confirmreceiversbank != 3 ) {
    alert("service not available");
         return home;
    }
    else { 
        confirm("Please comfirm receivers details:\n\naccount name: Jackson Jade\naccount number: 0000001212\nbank name: gt bank\n\nPress OK to proceed or Cancel to abort.");
        return true;
    }
}
confirmReceiversBank ();

// Function to prompt the user to enter the amount to transfer
function promptAmount() {
    var amount = prompt("Please enter the amount you want to transfer:");
    if (amount > 10000) {
        alert("insufficient fund");
        return home; 
    } else if (amount <= 0) {
        alert("amount can not be 0");
        return promptAmount();
    } else {
        confirm("Are you sure?:\n\naccount name: Jackson Jade\naccount number: 0000001212\nbank name: gt bank\nTransfer Amount: " + amount + "\n\nPress OK to proceed or Cancel to abort.");
        return parseFloat(amount);
    }    
}
promptAmount();

function TransferSuccessfully(amount) {
    amount = promptAmount((amount) < 10000);
    alert("Transfer successful!\n$" + amount + ": has been transfer to\naccount name: Jackson Jade\naccount number: 0000001212\nbank name: gt bank");
}
TransferSuccessfully();



