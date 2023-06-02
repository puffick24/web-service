import React from "react";

const Map = () => {
  return (
    <div style={{ 
      position: "relative", 
      overflow: "hidden", 
      width: '100%',
      height: '400px',
    }}>
      <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px", }}>
        Минск
      </a>
      <a href="https://yandex.by/maps/157/minsk/house/Zk4Ycg9gTkEHQFtpfXR4dHllYw==/?ll=27.481678%2C53.895660&utm_medium=mapframe&utm_source=maps&z=19.01" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
        2-й Силикатный переулок, 17 — Яндекс Карты
      </a>
      <iframe src="https://yandex.by/map-widget/v1/?ll=27.481678%2C53.895660&mode=whatshere&whatshere%5Bpoint%5D=27.480759%2C53.895563&whatshere%5Bzoom%5D=17&z=19.01" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{ position: "relative", width: "100%" }}></iframe>
    </div>
  );
};

export default Map;
