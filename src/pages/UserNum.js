import React, { useEffect, useState } from "react";
import { dbFirestore } from "../fbase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const UserNum = () => {
  const [Num, setNum] = useState(0);
  // 개인 데이터 베이스 연결
  const docRef = doc(dbFirestore, "Users", "user");
  const docsnap = getDoc(docRef);
  useEffect(() => {
    // here의 값을 결과값으로 변경하면 되는 것 같음
    docsnap.then(here => {
      const abc = here.data().userNum;
      setNum(here.data().userNum);
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
