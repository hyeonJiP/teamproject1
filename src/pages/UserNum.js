import React, { useEffect, useState } from "react";
import { dbFirestore } from "../fbase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const UserNum = () => {
  const [Num, setNum] = useState(0);
  // 개인 데이터 베이스 연결
  const docRef = doc(dbFirestore, "Users", "user");
  const docsnap = getDoc(docRef);
  useEffect(() => {
    docsnap.then(Data => {
      const abc = Data.data().userNum;
      // setNum(userNum => userNum + 1);
      setNum(Data.data().userNum);
      console.log(Num);
      updateDoc(docRef, { userNum: abc + 1 });
    });
  }, []);
  return (
    <div>
      {Num}
    </div>
  );
};

export default UserNum;
