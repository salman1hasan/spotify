"use client"

const ModalProvider=() =>{
  const [isMounted,setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[]);
  return (
    <>
    Modals!
    </>
  )
}

export default ModalProvider;