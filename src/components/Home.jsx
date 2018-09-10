import RkNavSide103 from "./RkNavSide103.jsx";

export default function Home(props) {
  return (
    <div>

  {/*rkNavSide103*/}
    <h2 className="item-id">
      rk_comps v1
    </h2>
    <div className="row">
      <div className="col-sm-4">
        <RkNavSide103 />
      </div>
      <div className="col-sm-8">
        <iframe 
        name="iframe_right"
        id="iframe_right"
    title="" 
    width="100%"
    height="999"
    src="">
</iframe>
      </div>
    </div>
    
    </div>
  );
}