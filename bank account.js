<html>
<head>
</title>Bank account</title>
</head>
<body>
<h2>Bank account details</h2>
<p id = "output"></p>

<script>
class bankaccount{
constructor(name, accNo, balance){
	this.name = name;
	this.accNo = accNo;
	this.balance = balance;
}
deposit(amount){
	this.balance += amount;
}
withdraw(amount){
	this.balance -= amount;
}
display(){
	document.getElementById("output").innerHeight=
	"Name:"+this.name+"<br>"+
	"Account NO:"+this.accNo+"<br>"+
	"balance"+this.balance;
}
}
let acc = new bankaccount("Pragati",101,5000);
acc.deposit(1000);
acc.withdraw(500);
acc.display();
</script>

</body>
</html>

