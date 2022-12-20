import './worksList.scss';

function WorksList({title,active,setSelected,id}) {
 
  return <li className={active ? "worksList active" : "worksList"}
  onClick = {()=> setSelected(id)}
  >{title}</li>;
}

export default WorksList;
