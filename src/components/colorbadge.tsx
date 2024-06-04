/** @format */

export default function ColorsBadge() {
  const colors = [
    "#ffffff",
    "#121113",
    "#b5b2bc",
    "#797979",
    "#3a3a3a",
    "#0bd8b6",
    "#ff0000",
  ]
  return (
    <>
      <div className=" absolute  top-0 md:top-auto md:bottom-0 right-0 flex">
        {colors.map((item, i) => (
          <div
            style={{
              width: 25,
              height: 10,
              backgroundColor: item,
            }}
            key={i}
          ></div>
        ))}
      </div>
    </>
  )
}
