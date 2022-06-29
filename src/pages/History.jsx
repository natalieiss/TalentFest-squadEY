import React, { useCallback, useEffect, useState } from "react";
import { getPolicy } from '../lib/firestore';
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";
import List from "../components/List";
import Card from "../components/Card";
import Footer from '../components/Footer';

function History() {
  const [policy, setPolicy] = useState([]);
  const [userId, setUserId] = useState();

  const id = `ID-00000324`;
  const estado = "Solicitação Enviada";
  const subEstado = "N/A";
  const preco = 10000;
  const tipo = "Colisão";
  const idPolicy = "";
  
  
  const showAllPolicy = useCallback(async() => {
    console.log(userId)
    if(userId) {
      const allPolicy = await getPolicy(userId);
      console.log(allPolicy)
      setPolicy(allPolicy);
    }    
  }
  ,[userId])
  
      useEffect(()=>{
      authChange(setUserId)
      showAllPolicy();
    },[showAllPolicy]);
  
  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <Container customClass="containerHistory">
      <Header customClass="centralize" children="HISTÓRICO" />
      <List customClass="historyList">
        {policy.map((apolice) => {
          return (
            <Card key={apolice.apo_codigo} data={apolice} />
          )
        }
        )}
      </List>
      <Link href="/occurrence" customClass="historyHiperlink">
        Aviso de Sinistro
      </Link>
      <Footer />
    </Container>
  );
}
export default History;
