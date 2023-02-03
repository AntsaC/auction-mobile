import {FC, useEffect, useState} from "react";
import {
    IonButton,
    IonCol,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    useIonToast
} from "@ionic/react";

import {useHistory} from "react-router";
import PhotoPicker from "./PhotoPicker";
import {Category} from "../../model/Category";
import CategoryService from "../../service/CategoryService";
import AuctionService from "../../service/AuctionService";
import {usePhotoGallery} from "../../hooks/usePhotoGallery";
import { MySpinner } from "../shared/MySpinner";

interface Props {
    onSave: CallableFunction
}

const LoginForm: FC<Props> = ({onSave}) => {

    const history = useHistory();
    const [present] = useIonToast();

    const [categories, setCategories] = useState<Array<Category>>([])

    const [category, setCategory] = useState<Category>({
        id: -1,
        nom: ""
    });
    const [price, setPrice] = useState(0);
    const [hour, setHour] = useState(24);
    const [minute, setMinute] = useState(0);
    const [description, setDescription] = useState("");

    const { photos, takePhoto } = usePhotoGallery();

    const [loading, setLoading] = useState(false);


    useEffect(function () {
        findAllCategory()
    }, [])

    async function findAllCategory() {
        let cat = await CategoryService.findAll();
        setCategories(
            cat.data
        )
    }

    async function saveAuction() {
        try {
            setLoading(true)
            const photoBlobs: string[] = [];

            photos.forEach(value => {
                photoBlobs.push(value.data)
            })
            console.log(category)

            await AuctionService.save(
                sessionStorage.getItem("authId")!,
                {
                    "categorie": category,
                    "description": description,
                    "duree": {
                        "heure": hour,
                        "minute": minute,
                    },
                    "prixMinimum": price,
                    "photos": photoBlobs
                }
            )
            setLoading(false)
            onSave()
            history.push("/me/auction")
        } catch (e: any) {
            present({
                message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                color: "danger",
                duration: 5000
            })
            setLoading(false)
        }
    }

    return (
      <div className={"form"}>
          {
            loading && <MySpinner />
          }
          <IonItem>
              <IonSelect
                  placeholder="Select category"
                  value={category}
                  onIonChange={(e: any) => setCategory(e.target.value) }
              >
                  {
                      categories.map((category) => (
                          <IonSelectOption value={category} key={category.id}>{category.nom}</IonSelectOption>
                      ))
                  }
              </IonSelect>
          </IonItem>
        <IonItem className={"ion-margin-top"}>
            <IonLabel position={"floating"}>
                Price
            </IonLabel>
            <IonInput
                value={price}
                onIonChange={(e: any) => setPrice(e.target.value)}
            />
        </IonItem>
          <IonRow>
            <IonCol>
                <IonItem className={"ion-margin-top"}>
                    <IonLabel position={"floating"}>
                        Hour
                    </IonLabel>
                    <IonInput
                        value={hour}
                        onIonChange={(e: any) => setHour(e.target.value)}
                    />
                </IonItem>
            </IonCol>
              <IonCol>
                  <IonItem className={"ion-margin-top"}>
                      <IonLabel position={"floating"}>
                          Minute
                      </IonLabel>
                      <IonInput
                          value={minute}
                          onIonChange={(e: any) => setMinute(e.target.value)}
                      />
                  </IonItem>
              </IonCol>
          </IonRow>
          <IonItem className={"ion-margin-top"}>
              <IonLabel position={"floating"}>
                  Description
              </IonLabel>
              <IonTextarea
                  value={description}
                  onIonChange={(e: any) => setDescription(e.target.value)}
              />
          </IonItem>
          <PhotoPicker
            photos={photos}
            takePhoto={takePhoto}
          />
          <div className={"button-group"}>
              <IonButton onClick={() => saveAuction()} className={"ion-color-success"}>
                  Create
              </IonButton>
          </div>
      </div>
  )
}

export default LoginForm;