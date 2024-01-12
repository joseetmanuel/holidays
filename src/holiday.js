const w_days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]

export default function Holiday({ h_day}) {
  const {name, date, primary_type} = {...h_day};
  let {month, year, day} = {...date.datetime}; 
  month = month -1;
  let Xmas95 = new Date(year,month,day)
  let weekday = w_days[Xmas95.getDay()];

  
  return (
    primary_type == "National holiday" && (
      <div className="row">
        <div className="col-2" style={{textAlign: "right"}}>{weekday}</div>
        <div className="col-1" style={{textAlign: "left"}}>{day}</div>
        <div className="col-3" style={{textAlign: "left"}}>{months[month]}</div>
        <div className="col-0" style={{textAlign: "left"}}>{name}</div>
      </div>
    )
  );
}
