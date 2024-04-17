const Scheleton = () => {

    const arr = [1,2,3,4,5]

    return (
        arr.map(()=> <div className="flex flex-col gap-4 w-80">
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-8 w-28"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>)
    )
}
export default Scheleton