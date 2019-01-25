let levels = [
	
	//NIVEL 1
	{
		intro:`
			<h1>Nível 1</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				display: flex;
				justify-content: flex-end;
			}
		`,
		cars: ['green']
	},

	//NIVEL 2
	{
		intro:`
			<h1>Nível 2</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				justify-content: center
			}
		`,
		cars: ['green','yellow']
	},

	// NIVEL 3
	{
		intro:`
			<h1>Nível 3</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				justify-content: space-around
			}
		`,
		cars: ['green','yellow','blue']
	},
	
	// NIVEL 4
	{
		intro:`
			<h1>Nível 4</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				justify-content: space-between
			}
		`,
		cars: ['green','yellow','blue']
	},

	// NIVEL 5
	{
		intro:`
			<h1>Nível 5</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				align-items:flex-end;
			}
		`,
		cars: ['yellow', 'green']
	},

	// NIVEL 6
	{
		intro:`
			<h1>Nível 6</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				align-items:center;
				justify-content:flex-end;
			}
		`,
		cars: ['blue', 'yellow', 'green']
	},

	// NIVEL 7
	{
		intro:`
			<h1>Nível 7</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				flex-direction: column;
				align-items: flex-end;
			}
		`,
		cars: ['yellow', 'blue', 'green', 'pink']
	},

	// NIVEL 8
	{
		intro:`
			<h1>Nível 8</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				flex-direction: row-reverse;
				justify-content: space-around;
				align-items:center;
			}
		`,
		cars: ['yellow', 'blue', 'green', 'pink']
	},

	// NIVEL 9
	{
		intro:`
			<h1>Nível 9</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
			.car.green{

			}
		`,
		hiddenCss:`
			#parking-lots-layer {

			}
			.car.yellow{
				order: 1
			}
		`,
		cars: ['yellow', 'green']
	},

	// NIVEL 10
	{
		intro:`
			<h1>Nível 10</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
			.car.blue{

			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				justify-content: space-between;
			}
			.car.pink{
				order: 1
			}
		`,
		cars: ['yellow', 'pink', 'blue']
	},

	// NIVEL 11
	{
		intro:`
			<h1>Nível 11</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				flex-wrap: wrap;
			}
		`,
		cars: ['yellow', 'pink', 'green', 'yellow', 'pink', 'green']
	},

	// NIVEL 12
	{
		intro:`
			<h1>Nível 12</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				flex-direction: column;
				flex-wrap: wrap;
			}
		`,
		cars: ['blue','green', 'yellow', 'pink', 'green', 'yellow', 
		'blue', 'green', 'pink', 'blue']
	},

	// NIVEL 13
	{
		intro:`
			<h1>Nível 13</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				align-items: center;
				flex-direction: row-reverse;
			}
		`,
		cars: ['green','yellow', 'green', 'green', 'green', 'green', 'green', 'green',
				'green', 'blue', 'green', 'green']
	},

	// NIVEL 14
	{
		intro:`
			<h1>Nível 14</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
			}
		`,
		hiddenCss:`
			#parking-lots-layer {
				flex-direction: row-reverse;
				align-items: flex-end;
			}
		`,
		cars: ['green','green', 'green', 'green', 'blue', 'blue', 'blue','blue', 'yellow',
				'yellow', 'yellow', 'yellow']
	},

	// NIVEL 15
	{
		intro:`
			<h1>Nível 15</h1>
		`,
		css:`
			#estacionamento {
				display: flex;
				flex-direction: row-reverse; 
			}
			.car.yellow{

			}

			.car.blue{

			}		
		`,
		hiddenCss:`
			#parking-lots-layer {
				justify-content: space-between;
				align-items: flex-end;
			}
		`,
		cars: ['yellow', 'pink', 'blue']
	},
]
