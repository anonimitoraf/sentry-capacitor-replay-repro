import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import * as Sentry from "@sentry/capacitor";
import { useState } from "react";
import classes from "./Tab1.module.css";

const Tab1: React.FC = () => {
  const [bomb, setBomb] = useState(false);
  if (bomb) throw Error("boom boom boom");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={() => Sentry.nativeCrash()}>
          Trigger a crash
        </IonButton>
        <IonButton onClick={() => setBomb(true)} className={classes.btn}>
          Boom
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
