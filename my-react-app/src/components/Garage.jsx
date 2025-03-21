function Car(props) {
    return (
      <h2>Im a {props.name.brand} {props.name.model} from year {props.year}!</h2>
    )
  }
  
export default function Garage() {
    const cars = [
      {name: { brand: 'Ford', model: 'Mustang'}, year: 1960},
      {name: { brand: 'VW', model: 'Golf'}, year: 2000},
      {name: { brand: 'Opel', model: 'Corsa'}, year: 2010},
      {name: { brand: 'BMW', model: 'X5'}, year: 2015}
    ]
return (
    <div>
        <h1>Who lives in my garage?</h1>
        {cars.map((car, index) => (
          <Car key={index} name={car.name} year={car.year} />
        ))}
    </div>
    );
}