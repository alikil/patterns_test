import { Director } from "./director";
import { ConcreteBuilder1 } from "./builder1";

function clientCode(director: Director) {
	const builder = new ConcreteBuilder1();
	director.setBuilder(builder);

	console.log("Standard basic product:");
	director.buildMinimalViableProduct();
	const basic = builder.getProduct().listParts();
	console.log(basic);

	console.log("Standard full featured product:");
	director.buildFullFeaturedProduct();
	const Standard = builder.getProduct().listParts();
	console.log(Standard);

	console.log("Custom product:");
	builder.producePartA();
	builder.producePartC();
	const custom = builder.getProduct().listParts();
	console.log(custom);
}

const director = new Director();
clientCode(director);

/*
1) Очень простой и удобный паттерн
2) Есть директор для крупных комбинаций.
3) Легко модифицируется.
4) Удобно строится.
*/
