import React from 'react'
import { Pressable, StyleSheet, Text, Image  } from 'react-native';
import { colors } from '../../global/colors';
import { useDispatch } from 'react-redux'; 
import { setProductsFilteredByCategory } from '../../features/shop/ShopSlice'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const CategoryItem = ({item, navigation, route }) => {

  const dispatch = useDispatch(); 

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setProductsFilteredByCategory(item));
        navigation.navigate("Category", { item: item });
      }}
    >
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Laptops" && (
        <FontAwesome name="laptop" size={24} color="black" />
      )}
      {mayus(item) === "Fragrances" && (
         <Image
         source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADd0lEQVR4nO2Za2hOcRzHz4zN9ZkiIeZSXiwb5lJMScrtBYm8kNpbbRSllCxzm8urpWyTF4p3SBIhKTIs9zdyW2HWlFfuxiwf/fidOjv9n+ec5zznnOdJz7dW277nd/vff7+fZeWRR1IAA4FlwE7gHPAUeAd0A1+BNmATUGTlGoB+wHLgDPAFf3gEjI3asSLgkI5kF3DANIJAAbAeaHc4+Au4DewB1gBTgZFAMTAMWAU8128fRjozwEHDCO53fbMQuO/gXwNbgFE+9A93BLMxykBkFgTzgCr9vUu5wUCLI4C3wIZ0RxZYrfJtUQbyF+6/XfgNHAGGBLSRUD2fQ3U+YCBNwNCANkpiC8QNx9Jq1kAEnUBNBkvrTpSBtBriuOn6ZgFwz8G/AbYCo31u9hcqVxtZIMmWWJLjdx3w0hFQr156+4C1QLmcZHr8JnQm7CAeAAOyHojrQlwKnJI1jz9IEGOiclwuMi+0eugoBpYAdcBZ4Ike59/11hcbtZHOhM+R9JyhrMPHnsgHEivyM5JrIL9HcgzkZyRHAMwHrvu9EPXbKivHKh6HHU/ydHFSnvXZDqIEuKUO/QQa5H/KTdP/P0si16Ay6JM/ka0giiWhceTcs1z8duWOp9AxW5Mq9CEYf52KfxmeoAModXEJLQMJFnnomaADIWiK3HEntCoie+IHUGngG+0NbfkAMFOXmeica8UFRxq7y8BVaIFNfirS0Lk3neAzhqadgg9S9TOkrTeUb0xTrxwAn1S2LHNPvQ3Wq7EWA7dYuS53kD51H1P5HaE5nMLYNTW2wsCdUG5bQN1S0xVcCcVZD2NySgkmGji7slEeUPdklX8VirMexqQAEDW+xRGINFuiRnccgXSmWFrtGS6tSSrfEYqzHsauqrGVBu60cjUZbvbLoTjrYUz6eoJmAyedJ7R5UxBA91GVrwvN4RTGyhwXYp++hlbZ3ytfnaZeaal9VNkpoTvusbzqDZx0W9GAfNdlgd0qdyl0h1MYnaMVcznBphuK0fYz5bGU/33oq9QHaK87HYgcjman9DTGubgR2hsX3PXQU+q4ZPs0S2MB0F9OF/u4BGa4+PHaB+/T3DHMhJ2LXAQKY3HeDWAQcEEdkXxis+UT2oa2U93zkvtb2QRQKHmJOtSThlyPfWBkbSZMICCsXAPm5qcXku6fPKz/BH8AKQcrmCovoYEAAAAASUVORK5CYII=' }}
         style={styles.image}
       />    )}
      {mayus(item) === "Skincare" && (
        <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nLXWzUtVQRjHcbMIokCUIsEWUZsMIapVrloI4cKC0k1FYIvcCBrRC0EhSC8iJoYgpRkRROHK/6BNf9cnhp4Lh8uce8+1cw48zDDPPOd755nf85zb11fDgyN4i02crOOdZaBbeIALWG4SNI8rOIQvTYJe43zMvzUJ2sCJmDdzIoxgH+fCfsVdHa4T8hyrMRYtpXKnTtDOQXytDUO4g5k2m8LROkGbWMCjNlvDbNveF1jJpO5VFVC60D+Z4N8YyOw/g8e4i0sJgLNdxRApeppZ/4yLJTEzuIFTeNcREAGj2EoVnvEdx14aM76bYUnqS1VA652aYvzq+yXr05H2l1VA2zFO4H3B3sRpT6d5Ju467kWhPukF9DNkPhg2jN1YW8nEjeNhiGG+F9B2ztcBNICPmEvQxkDpiRMt5YRUN+gabneF/A/Iv/r5Ed3japOgjZD2sSSkJkFfC/Okzv6qoO/RLFt19CEuugz0DItRS1u9nKi/UEODrWbaRQzjmKz0ZU1/LHK9rOC/XKnFVACNRdo+lVj6BAwd5OV/AQjg2BnXybRpAAAAAElFTkSuQmCC"}}  style={styles.image}/>     )}

      {mayus(item) === "Groceries" && (
       <Entypo name="shop" size={24} color="black" />
            )}
      {mayus(item) === "Home-decoration" && (
        <MaterialIcons name="house-siding" size={24} color="black" />
      )}
      {mayus(item) === "Furniture" && (
        <MaterialCommunityIcons name="table-furniture" size={24} color="black" />      
      )}
      {mayus(item) === "Tops" && (
        <Image source= {{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6klEQVR4nO2WsWtTURTGn8EEO0hNJCTkD9BCNl2c7KIOobTFJZubdcqgoDjoohAcnOyis6IQ0LHFwdLhVcySDuJUUnQICK2LgqIiPznwPbgm7+UlLyGDvA8u3HznfOd8uYf73vO8FCMAKAG3gT1gH7gPnAOOa9n+nmJ7yi1No/FZ4Anwg/HxE2gBF4Aj4zZeBD44xX4Dr4AX+v0H6ACHwIH2xhmeAy+lCWC1zo/afBn4JeEn4A5QUaygpoY3wGWtLXFmJq/cirQfnRNZimt+EvgiwQPgaMRYAhMurPmZkPws8FA5pisMM3BDia9jjOaBu8AmsKF/eiJGYydmuD4saVdJK96UAayq9m5UQlUJNoKcuLfAzgRNTe9rn3PGWw1Lbir42OF64k4laH5a2p7D2ZU2NMMEXQVrDmf32HA1gYE1aVsOVxPXDRO0FbRrUwfmgYa4pwkMPJO2oVp150q+CxMUbd59V+tzpCDeQLuvRgDrUYwSZYFrSvqmJ1z4kcUbCEbaUS1ftbPjFJlTka8JDFhTw7Fxtf8gODdvRroBpAZIRyB4M9INIDVAOgLBm5EuspBerzeBi/rYKNtzXqss7hJwy3kVT8WAT3L40zCQARaAK8A6sA281+fad62eOIs9Uq5pMhMb8P53/AWZnEA27Yo30wAAAABJRU5ErkJggg==" }}
        style={styles.image}/>
        )}
      {mayus(item) === "Womens-dresses" && (
        <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADw0lEQVR4nO2abYiOWRjH7yZZQ95SK8xEeZ3aZUsUYVKjECnhC9LsivJBlvWya0Pig8VQfPOasBFmxAfyuu1saFeI3bW0fPCybewmrWkT+9NV/zun6Zln7+d+znluU/511/2cc13/63/dc859rnPuiaL3SAbgO+DHqLUDIWrtoLUkAgwDvgHuAz8A3YAJwGrgZJyI7lerz2wuAHflOyzrJM7hD2dLKbw3MAPYDDQ6IuqA33TfpL5NwDSgAugJTFXb97Ix3Aa2ODyN4rYYvUMk0Ba4kedp9gB26X58Ar7xst0BVObhvW6xfSbSTuP5D6ABWA5UA38qYBUwT/dbE/Btle1nwMe6N65qcTcolsX8wFsieQTFf6WRQBfgBfAP0CuPTy/ZPAc6AaPFcSO44DyizkrERP22uWK4bCJz2JvwK7JZr7bJ+n0mixxiYQclYrZ+twd+Vds1oI9j29f5C16NhwxQq7b9WSYSj/WvnTabvHfU/gQYobH/dzyEgA8d+zVqr8sykc8lYmez9m7OsHuuOWE4AXRsZrtHfYtKnoAjYlJLixnQxoaL8yrdDZTlsDuv/kklE55DxCCJ+L2FfltfYnRvweae+gdGWUEL5Std5Sn87eXwWv7+Fr40cEqToSkLTsPdMOoKAHBIYuak8P1UvoejrAF8KTEbU/hagWhYGUZdAdD+wnAqhe/pzN9YOd5MTSr21qp8H6nVvIOuvmqbJpsGp5yvjLIG8AnFY8i7kMgyiakHpgPr9LQva/v7QpfdX1LfOtmaj2Fp1nlETikyK4Xv7MwrX2dB+xf4z+ZKVCBstZevcXSIsoLtQ/RErxXBYdvZRFvkYHAODjYUwWHHQZmX8b9IRE0RHOPEccuvuuQCKpz1o7zIg43s1hPe1kmnPHDFK3ytH3WFBT+g4Is9cH0hrn1+1BUW/KGvVdmpDh74UZc88AAF/ivX9jUFXxnwVJz9/KhMFni+gh71yBmXK3N9cSYJ+q2CLvTIuajk51vAIwUd7JEzniePfXH+X8Aqn/OjhXnS3xdvkvlxLAB3fcnmCbBXwZYE4F6a6+QydH01KgD3aHHf9M3dPFBnHai9tL1IAP5ycb/O9VnCZ6AaPbFg/wAA/KQYY6OAQb5SkG0BY2xXjBVRwCDH0+7PU+zj60uxENqEP2Kni8ACYAowBvhIH3q66mrfbH8ft1fKdox8F4jriPMyeRQykfhbRilwLlgiSsae6HBgJrDK5osOsi8CP9u3EivH9antmSPsmdoeyOaWfA6Jw7hmirtr0CTeIwqPN2d7ZG3++FbtAAAAAElFTkSuQmCC"}}
        style={styles.image}/>
        )}
      {mayus(item) === "Womens-shoes" && (
        <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYElEQVR4nO2af8heYxjHbxs2bDPm56Qk05g1WhOKKBJqmVEmtbyNTUmpifJrht5E8ypLKEmIVopEY62N7CVbayQb++Udw7aQ37y2jy7PtXVc733Oue/nPM+e4+n+/Pmc+7rOdb7nvr/n/vE4l0gkEolEIpFIRAHcTYNfgS+Bd4B7gCmu2wEOBL4ln/eBy123AlxKGG8AJ7huA1hMODtEMNdNAB+ah3wWeA34PUeEQaDHdQPAQeZBdwNH6LUxwL3Azx4R9gBz3f/Q5X8B1gNLgfnANebBPvfEHgu85BHhb2C6qzvAwTp2Q3i9IM8d2kOy/Aac5+oMcBnhPFKS6yr1gCy7gBNdXQEWRQiwE7i4JN/16gFZPhA/cXUE+NgU+4J+04tcfnZJTjFHy4OubgCjzdsS4xqr18YC96kxWiRmXkHeA4A3TYz4w4WuTgDnmiI3edocD7ziEUHEmlGQ+xhgu4nZDIxydQHoMQUuK3ijd8a6vPiFJ2axqwvA/aa4Z0raz4x1eeAJz/C5yNUB4DlT3F0BMXM8Lv+erBpz2o8Ctpj2G4FDXacB3jKF3RQYF+XywCUe0Ra5Gi50ZgXGRbu8DC+PiZ7vOgmNrpjliojYoz0uL119dE57WTwNmPbbgKNcp2DoGuCCyPgol9dptx0KSzvmB8CPppizmsgR5fLAowxllcwb3P6GxiZnlmuBwyJzRLm87jHIA1t+AG4DRrTsAQOKH/QUMqjmeGvo+Ix1efWPtfjZpQu0acCwlj6wBfiLYmSm9zBwZECuKJeXnSXPV8giHvWqTtiuBk5v6VSaxh5/6DJ4Zkmuw9XVs4jrjyuIGQn05vTEsnpkF2tMVQFWmcRflBTztOwgtdrlxXx1CW5jy/hG9h+qCLDEJLxO3+QNwGc5N12xd2O01S6vXfxxYGukEC9L3c0I0GcS3W5OhPJYk+cLrXJ5YDJwI/Ak8La+kIGCjZpPZOkeK8B8k6Qvc21Yieof5X0y2+ny2kMfyDFwGcLjY5LNMgmWRAiAHpAM74TLA2cC6zw5V+atTIcgU18T3G8WPJavPL/1dcrlZTipgJaHiuL2AZxsAgcKBBCHnuD51Ak3uw65vIrQb+L+AE4qisu+oWxRg3u7tE8A/f1U4Dtz7c+QA5B2uTwwUWvI0ltWz79od8syvkgAvTYV+Mlc/xo4zgXSapf37G5tCC1krQmcViaAXp/h6dLvVj0AKXH5GPYUzVf2oWMzy5UhAmgbMTjLixLrKgKcofONKpwWcqOnTNAtEQIMl610z40XVhWgxOVDmdrMBmdv5tp/KJj02K01ik6OmhChv50C9Jig52ME0HaneLbXZAwuyJsoRYrgc/mF7foT1PJYAbTt2TnniHIyPD3IkIrzW5f/tEo+azZBuBJ0OSybKPsD6WGHuKrQOAUOIjDfOZ6JUruYUFkAIeePTpR9BfLQhZD9urSDcpMLLHhDyN2ayDsJeAxYDXxfWwESiUQikUgkEq67+QcnYA8/R6mxmwAAAABJRU5ErkJggg=="}} style={styles.image}/>      
      )}
      {mayus(item) === "Mens-shirts" && (
        <Ionicons name="shirt-outline" size={24} color="black" />     
      )}
      {mayus(item) === "Mens-shoes" && (
        <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2YW4hNURjHjxnJJWryYEZCxjWT+whTeEByGZdSpHhwS8NEHlxSQqNhKC/UIHKJSLmMMZgSUpMYeVA8iUaaKERnxnV++vLtrLa999nbOXOOU+tXu+actda3vv9Z32XticUsFovFYrFkOUBHoAKYGctGgBn84R5QEvufAIYDeQHj8/ibS0Bhej31ANipDn0AlvvM6Qv89BDxBdgNdIplAmCAOmFyHRjmMfcK/jwBRmRCwAUfh34At4CNwEJgDlDrmvPc9fkrsBXITZfzhUZYtAFn1PEwnANygA1Ai2vsATAmHQL2G5ve0O/GAldVkB8nzZgHlvqc4GHJnfZyvgPQbGw4zTXeD1gDVAOXgZvq0PiIufENOA1MT2miA0XGJq8lHJKw9VntSDjOBup8xHwCLgJrgcHJClhvGD6RpK0KLcE7jNwKCkGHJuA4MFUiIuqmEhoO5ckI8LAtiW127SqPiuWmEZgUZRMzbpekWMAU4Ls+Jcb3g/TkpYO/9xAh85eF3eSasXBuKgWo/f5A74DxXGACcEr7h4P8XRRmg7PGonCq2wl+X1MkhByOhk08swpJqSsDZgETgdHaEyYDpcAKYAuwFziiHVzyaLuO5ycpotjw50WYBXtIPS+B88AmFd4tpPN5wEHDTkuYRXdof6QvvAJuS1joCa7WZ53eYqVBtrrWvQkjQJqKw3ytDsfUYAPwGHgE3AVqpFcA+4DNwCpgkTakA1oq4ykUXpPI+R7G5HjkJuL/yjkKWKm50ajXiH+hNNFmPY3Jb5N1PmCfzsBIYIFeyyuBQypQ7lW79JRNakP9oMA7Y5F0yl4JTsxxpEzDyHmcmF6sFaxYy2LXAHsFuuapy/lnQX64jUgCmbSpKDFyH3io7d8UGhV502tWmw1qU+4/Xsg7REEo51VAlwTX4HTxEdgmORTaeUNEjlaTeo9SZtKqv2K9vsxUaTxXajxX6xtanVavpgT24lrtyoHukR0PqCIDje47DhgS6Vi9kzgfGKrdXWz3ydh/MCwWi8VisVhi2ccvNpxII50hMs0AAAAASUVORK5CYII="}} style={styles.image} />      
        )}
      {mayus(item) === "Mens-watches" && (
        <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO2aS29VVRTHD+WKIVw7AZPOlERpcWQAZ7ZDsbwSkcRoBFrUCSDoBzCNIZ2qIYwMRCM1KIlp/ABIKGAFlEeiLRpjoICWOtHW+KgxP7PK/+Dq9lw55559b03DSvZkrbv/a6+z12vvfZPkLs0TAk4CZyLinbURCy+v0jZu0WREzElhtsXCzKO0U0q/iIh5XpiPx8LMo7RXSj+IiPmhMHtiYeZR2i+l+wL+SmA38B5wCbgB/KpxXTyT7QI6grn7hNnfTEOOSuk2YDHwsrkZxelzGb5YWEZHm2lI6s9v66un9D1wENgKrAKWAvdoLANWa8GHgB/cvBvCMjrfTEPSDJPScWA9sLAARgXYAJwIsCYbu/p/FmAL/ktKvwGeiIDZDXwrTMPujrPa2gqfB/6UwneBJRm/MZd6Xbs0CvyiMSqeyVZlzKsCh4U9DTzXKCM2OiNeC2QLgC3AZfKT/fZpmxtg9Tlj4u6MpUoXF6ERy4Fht8CrwH5gLdBuu6bRLp7JxtzvTwMP1jBmCng4lhEVpckZdwpkXcCPko2pUN4x4O03wA7gmuZOGFYy+zcDkp2xNcQw5BUX2EsCI/6Q7KOseMmBbXExKAzD6gpkaQLYXdaIVvfF1wbulPLfCP28oI4W4E23M8udbJ34pqs1xm4cDwJ72O1ES90KZhuT7sxp/2GAodK7AowIZL3jbXExUdid/kOXuZL1Y0abg2xp9FW9wI+4tqPidiNNsb2xjHA6XxD2SJBsxsVvL+NWB4Nil6bY3O1IAZ0LXSZ71PHfEe/VekDf1+StjmdV2Wh/xPWHeg9IR5/jbRdvoAiQBZun2+2EWgyjJwPfvkL9dDKj7zI65nhrZjhwqYghIS11sq/FWxHRkKFAf7v4lx3vfvFuljFkkZNZy2BUTRpE3PowRlOOd694v8cyZLIJhrRKx88ZhvxWBKiQa5V0r1nxkcO1xpOCF2+eVjvZJ2GwlzRkVnwEbYkP9sfEu5iUSL/b/gfpt6dw+nWT92ryoYyCONagglipURDtNFp3QbTDFLrtyGpRdkS2w/BfymhR7Abmpvgd9QJ/KYANjmfHU/TlomUv4D53tfSU428q1TQKZI9ATjjeAlf9ByO28R8L81QgOxWjja+6bb19EWBnbB2C0KGopaQRbwlrAnggo4WfKHWwEphdh6JjZ7XGUXewHjeTO6U7YVidgew7yXaWMsK11vYIY3Q4kHW5nbFD0Ys5Lx8qCuw0Jia8EUbAEcmGo1w+CHQF8FOY39353XfMY6oF3cp8VY0O8Q64FDsTE96dgnplLdFDSQOuSqdrGGMJYLM7GuehEZ+dMoyYjnEdW8uYZ91t40BWXFgh0wXbMV2TTmmMitfni10QE0ecEc80xIiMXihNAOsiYG50gf2vXq6ZzwpDWkzuoFTF3uTqRErNeVa4w0PPuC4Ktut4ao87izSWqYvtUe+U1qc0483JQ0/49GbPZ+coTuf0njhnT2/9NR5DO7Qw++IX9KXTx9Br2kmT7QzvqObqMbR3vjxPd86XPwy0zYu/cBjpAebTJBIBn1lfFQvvLiVzTH8D0fvtY2MzwWUAAAAASUVORK5CYII="}}  style={styles.image} />     
      )}
      {mayus(item) === "Womens-watches" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR4nNXXP2tUQRQF8CVbBDHYxN7apLCKiYUQTPIBFEtFUooSE2FbCX4K11jYmI8RFTtFCMZ/qbY0irhgUinkJyNXeOiLu2/fxI0Hhp2dOffNYe6bc+c1Gv8T0MnBqSNA/I6WzI0WOYctYLNkbvOfCfgbDkUAWriJrt7oBreVU8A6rlTgX8WjnAJeYDr6C1jDNvaivcN9zAfnHJ7nFPAFZ/EUr3ALEzgebSLGtvAkuN1ci5/EV3zAdYwU5jrFc48mbmAnYsZzCLiMb7hQIWYuYi7lEPAMd/rkTuNM9FdTOuouvhA5H+mDO4tPmCmk43XajToCHmCpZHwRxwr/z+Pj72nCCtp1BLzH6ZLxh3iJUwctHrxJ7KedGVTALsbKKhyW8TmO6GzJfCdifyK7gARcO8ghQ8CJugK2k8kMFJwpBWvJ4WoIuI17jRoPmA97bQ4Qm47hmyoGVorw/9VGReAuNqrG/YFkp2GrcxV3LsVc7Demn2K0ExeNZo9itBSFK08xSoizPoXHYa/L8YaPRZsM10s53whunnJcciFJla6Nt+ETu9Fv/3rhUj3IfSFZH/aVrBX5T6bSC/vZL6VDv5YfuQ8TQ/w0+56Dc6TwA6m/HE3f2BQlAAAAAElFTkSuQmCC"}}  style={styles.image}  />      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      {mayus(item) === "Smartphones" && (
        <Feather name="smartphone" size={24} color="black" />
      )}
      <Text style={styles.text}>{mayus(item)}</Text>
    </Pressable>
  );
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumBlue,
        width: '60%',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        borderRadius: 15,
        // SOMBRA ANDROID,
        shadowRadius: 1,
        alignSelf: 'center'

    },
    text: {
      color: "white",
      fontFamily: 'PoppinSemiRegular',
      textAlign: 'center'
      
    },
    image: {
      width: 26,
      height: 26,
      resizeMode: 'cover', 
    },
})