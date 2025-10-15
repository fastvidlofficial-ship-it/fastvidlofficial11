import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  console.log(props);
  
  const type = props.result.type.slice(0, 60) + " ....";
  const thumbnail = props.result.thumbnail;
  const urls = props.result.urls;
  const quality =props.result.quality;
console.log("type", type);
  

  return (
    <div className={style["result-div"]}>
      <div className={style["thumb-div"]}>
        <img src={thumbnail} alt="thumb"></img>
      </div>
      <h3> {type} </h3>
      <div className={style["download-section"]}>
        <table>
          <thead>
            <tr>
              <th>Quality</th>
             
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
           
              <tr>
                <td>{quality}</td>
                
                <td>
                  <a href={urls} download rel="noreferrer">
                    Download
                  </a>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultSection;
