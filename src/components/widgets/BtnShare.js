
const BtnShare = (props) => {
  return (
    <button className={`btn-share ${props.className}`}>
       
    {Array.isArray(props.children) && props.children[0] ? props.children[0]: props.children}
    <span>Anyone</span>
    {Array.isArray(props.children) && props.children[1] ? props.children[1]: ''}
</button>
  )
}

export default BtnShare