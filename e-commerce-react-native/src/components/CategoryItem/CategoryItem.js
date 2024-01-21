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
        <Feather name="smartphone" size={24} color="white" />
      )}
      {mayus(item) === "Laptops" && (
        <FontAwesome name="laptop" size={24} color="white" />
      )}
      {mayus(item) === "Fragrances" && (
         <Image
         source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADd0lEQVR4nO2Za2hOcRzHz4zN9ZkiIeZSXiwb5lJMScrtBYm8kNpbbRSllCxzm8urpWyTF4p3SBIhKTIs9zdyW2HWlFfuxiwf/fidOjv9n+ec5zznnOdJz7dW277nd/vff7+fZeWRR1IAA4FlwE7gHPAUeAd0A1+BNmATUGTlGoB+wHLgDPAFf3gEjI3asSLgkI5kF3DANIJAAbAeaHc4+Au4DewB1gBTgZFAMTAMWAU8128fRjozwEHDCO53fbMQuO/gXwNbgFE+9A93BLMxykBkFgTzgCr9vUu5wUCLI4C3wIZ0RxZYrfJtUQbyF+6/XfgNHAGGBLSRUD2fQ3U+YCBNwNCANkpiC8QNx9Jq1kAEnUBNBkvrTpSBtBriuOn6ZgFwz8G/AbYCo31u9hcqVxtZIMmWWJLjdx3w0hFQr156+4C1QLmcZHr8JnQm7CAeAAOyHojrQlwKnJI1jz9IEGOiclwuMi+0eugoBpYAdcBZ4Ike59/11hcbtZHOhM+R9JyhrMPHnsgHEivyM5JrIL9HcgzkZyRHAMwHrvu9EPXbKivHKh6HHU/ydHFSnvXZDqIEuKUO/QQa5H/KTdP/P0si16Ay6JM/ka0giiWhceTcs1z8duWOp9AxW5Mq9CEYf52KfxmeoAModXEJLQMJFnnomaADIWiK3HEntCoie+IHUGngG+0NbfkAMFOXmeica8UFRxq7y8BVaIFNfirS0Lk3neAzhqadgg9S9TOkrTeUb0xTrxwAn1S2LHNPvQ3Wq7EWA7dYuS53kD51H1P5HaE5nMLYNTW2wsCdUG5bQN1S0xVcCcVZD2NySgkmGji7slEeUPdklX8VirMexqQAEDW+xRGINFuiRnccgXSmWFrtGS6tSSrfEYqzHsauqrGVBu60cjUZbvbLoTjrYUz6eoJmAyedJ7R5UxBA91GVrwvN4RTGyhwXYp++hlbZ3ytfnaZeaal9VNkpoTvusbzqDZx0W9GAfNdlgd0qdyl0h1MYnaMVcznBphuK0fYz5bGU/33oq9QHaK87HYgcjman9DTGubgR2hsX3PXQU+q4ZPs0S2MB0F9OF/u4BGa4+PHaB+/T3DHMhJ2LXAQKY3HeDWAQcEEdkXxis+UT2oa2U93zkvtb2QRQKHmJOtSThlyPfWBkbSZMICCsXAPm5qcXku6fPKz/BH8AKQcrmCovoYEAAAAASUVORK5CYII=' }}
         style={styles.image}
       />    )}
      {mayus(item) === "Skincare" && (
        <Image source={{ uri: "data:image/png;base64,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"}}  style={styles.image}/>     )}

      {mayus(item) === "Groceries" && (
       <Entypo name="shop" size={24} color="white" />
            )}
      {mayus(item) === "Home-decoration" && (
        <MaterialIcons name="house-siding" size={24} color="white" />
      )}
      {mayus(item) === "Furniture" && (
        <MaterialCommunityIcons name="table-furniture" size={24} color="white" />      
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
        <Ionicons name="shirt-outline" size={24} color="white" />     
      )}
      {mayus(item) === "Mens-shoes" && (
        <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2YW4hNURjHjxnJJWryYEZCxjWT+whTeEByGZdSpHhwS8NEHlxSQqNhKC/UIHKJSLmMMZgSUpMYeVA8iUaaKERnxnV++vLtrLa999nbOXOOU+tXu+actda3vv9Z32XticUsFovFYrFkOUBHoAKYGctGgBn84R5QEvufAIYDeQHj8/ibS0Bhej31ANipDn0AlvvM6Qv89BDxBdgNdIplAmCAOmFyHRjmMfcK/jwBRmRCwAUfh34At4CNwEJgDlDrmvPc9fkrsBXITZfzhUZYtAFn1PEwnANygA1Ai2vsATAmHQL2G5ve0O/GAldVkB8nzZgHlvqc4GHJnfZyvgPQbGw4zTXeD1gDVAOXgZvq0PiIufENOA1MT2miA0XGJq8lHJKw9VntSDjOBup8xHwCLgJrgcHJClhvGD6RpK0KLcE7jNwKCkGHJuA4MFUiIuqmEhoO5ckI8LAtiW127SqPiuWmEZgUZRMzbpekWMAU4Ls+Jcb3g/TkpYO/9xAh85eF3eSasXBuKgWo/f5A74DxXGACcEr7h4P8XRRmg7PGonCq2wl+X1MkhByOhk08swpJqSsDZgETgdHaEyYDpcAKYAuwFziiHVzyaLuO5ycpotjw50WYBXtIPS+B88AmFd4tpPN5wEHDTkuYRXdof6QvvAJuS1joCa7WZ53eYqVBtrrWvQkjQJqKw3ytDsfUYAPwGHgE3AVqpFcA+4DNwCpgkTakA1oq4ykUXpPI+R7G5HjkJuL/yjkKWKm50ajXiH+hNNFmPY3Jb5N1PmCfzsBIYIFeyyuBQypQ7lW79JRNakP9oMA7Y5F0yl4JTsxxpEzDyHmcmF6sFaxYy2LXAHsFuuapy/lnQX64jUgCmbSpKDFyH3io7d8UGhV502tWmw1qU+4/Xsg7REEo51VAlwTX4HTxEdgmORTaeUNEjlaTeo9SZtKqv2K9vsxUaTxXajxX6xtanVavpgT24lrtyoHukR0PqCIDje47DhgS6Vi9kzgfGKrdXWz3ydh/MCwWi8VisVhi2ccvNpxII50hMs0AAAAASUVORK5CYII="}} style={styles.image} />      
        )}
      {mayus(item) === "Mens-watches" && (
        <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO2aS29VVRTHD+WKIVw7AZPOlERpcWQAZ7ZDsbwSkcRoBFrUCSDoBzCNIZ2qIYwMRCM1KIlp/ABIKGAFlEeiLRpjoICWOtHW+KgxP7PK/+Dq9lw55559b03DSvZkrbv/a6+z12vvfZPkLs0TAk4CZyLinbURCy+v0jZu0WREzElhtsXCzKO0U0q/iIh5XpiPx8LMo7RXSj+IiPmhMHtiYeZR2i+l+wL+SmA38B5wCbgB/KpxXTyT7QI6grn7hNnfTEOOSuk2YDHwsrkZxelzGb5YWEZHm2lI6s9v66un9D1wENgKrAKWAvdoLANWa8GHgB/cvBvCMjrfTEPSDJPScWA9sLAARgXYAJwIsCYbu/p/FmAL/ktKvwGeiIDZDXwrTMPujrPa2gqfB/6UwneBJRm/MZd6Xbs0CvyiMSqeyVZlzKsCh4U9DTzXKCM2OiNeC2QLgC3AZfKT/fZpmxtg9Tlj4u6MpUoXF6ERy4Fht8CrwH5gLdBuu6bRLp7JxtzvTwMP1jBmCng4lhEVpckZdwpkXcCPko2pUN4x4O03wA7gmuZOGFYy+zcDkp2xNcQw5BUX2EsCI/6Q7KOseMmBbXExKAzD6gpkaQLYXdaIVvfF1wbulPLfCP28oI4W4E23M8udbJ34pqs1xm4cDwJ72O1ES90KZhuT7sxp/2GAodK7AowIZL3jbXExUdid/kOXuZL1Y0abg2xp9FW9wI+4tqPidiNNsb2xjHA6XxD2SJBsxsVvL+NWB4Nil6bY3O1IAZ0LXSZ71PHfEe/VekDf1+StjmdV2Wh/xPWHeg9IR5/jbRdvoAiQBZun2+2EWgyjJwPfvkL9dDKj7zI65nhrZjhwqYghIS11sq/FWxHRkKFAf7v4lx3vfvFuljFkkZNZy2BUTRpE3PowRlOOd694v8cyZLIJhrRKx88ZhvxWBKiQa5V0r1nxkcO1xpOCF2+eVjvZJ2GwlzRkVnwEbYkP9sfEu5iUSL/b/gfpt6dw+nWT92ryoYyCONagglipURDtNFp3QbTDFLrtyGpRdkS2w/BfymhR7Abmpvgd9QJ/KYANjmfHU/TlomUv4D53tfSU428q1TQKZI9ATjjeAlf9ByO28R8L81QgOxWjja+6bb19EWBnbB2C0KGopaQRbwlrAnggo4WfKHWwEphdh6JjZ7XGUXewHjeTO6U7YVidgew7yXaWMsK11vYIY3Q4kHW5nbFD0Ys5Lx8qCuw0Jia8EUbAEcmGo1w+CHQF8FOY39353XfMY6oF3cp8VY0O8Q64FDsTE96dgnplLdFDSQOuSqdrGGMJYLM7GuehEZ+dMoyYjnEdW8uYZ91t40BWXFgh0wXbMV2TTmmMitfni10QE0ecEc80xIiMXihNAOsiYG50gf2vXq6ZzwpDWkzuoFTF3uTqRErNeVa4w0PPuC4Ktut4ao87izSWqYvtUe+U1qc0483JQ0/49GbPZ+coTuf0njhnT2/9NR5DO7Qw++IX9KXTx9Br2kmT7QzvqObqMbR3vjxPd86XPwy0zYu/cBjpAebTJBIBn1lfFQvvLiVzTH8D0fvtY2MzwWUAAAAASUVORK5CYII="}}  style={styles.image} />     
      )}
      {mayus(item) === "Womens-watches" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO2aW0sVURTH5XS0m9VDRn6C1NcuL6k9Fl4SzeglKvsAZYVFLxEVh0DrGyQJKqafoatlQTd6iB4igkrqWG/20MXwF9v+o6shtTmzZ4qDfxiYvWZmrf2f2WvtvdaekpIlFAmAG/jH9bRJVJIcNqZJpD5BInVpEjmcIJGONInkEiSSS5PISIJEhtMk8nSeTrwHrgAHgM3AeqBURwWwBTgI9AIf5tHxNE0ikyHjt4AmYFkEHVmgGbgT0jWZbO/nOrDHGH0J7DTXlgE7gMvAA2AC+K5jQrJLinqzpIEG4JXR25o0iQ7gh4z1AaslXwmcBj5G8AVH7JR7VjrKgX5dm3LDMykSrYbEGSPfB4xTON4Ce42+s4ZMk28SNcYvZkgAGeAifjCtkJ4JkfkMVPki4ZzyiRT3GRLD+Mc1Q2ZAskcu6vkgcsw4duATvr7EvBMiv3wmCABH45JYA3ySsl3GJ5LENNAuW42SuT6s8/E1bpro5JwzaYwDq2RzVLLOOEReSMlM9FCITQsnZXO32i/iRKpg2ZHVZBdlnoiLvGxmde5QE2dYXVHbzdhpo062r6p9ohAig3p4ZobVsiNt9Mj2IbUHoxAYCynbLLlbJ82H7ZHf1Jy9ugX0jumerWo/i6I4jPWSL+QftQmlzXnds8G2CyVSJvk30sdX2V5u28VA5EvSQyuyryziG16G1l1+xxbJ77M4aj2XlO7p3m2Rnf0P4feg2i6zSxvdJqFzGCiESKce7o3wBn2jVrZdNupwvBAi1Xr4g1miuPQ0LeSV95Qau9WRiYjMcyloVtvl2GmhSzZbYi0aQ8PrttorgDcpkHhnihJB8DkSh0i5CbsNku1V8pMUpoG20BLeJVZrCyYS+iou7SxPofZ73mSnr2N/DUPEOfljKeyXLKNCgW8MmeKDO3d46KX4IKVVphx01pDJeRpmTscFQ+KcKQdt8kLCkGlR0WyWjOTtMfP4N4FPhEhMBX7pHaqyB9XGAeMzLpqdNCnp38Dd2+WeNT4xZEjsT4SEIdNmOuMCQKO5ltFisEcJWl6r5m86d7JuN2MHw8hEp8Cxky9iL7CtMKrOZCPoKNVwvfdPthUW2ejJq1BwSOmp29wp01GhVWyH1k4T/8NGzwhFsvWWK5bN0MPFsj1dXyw/DFQWxS8cRfNTzRJKksNPAN6PcmdLI2kAAAAASUVORK5CYII="}}  style={styles.image}  />      
      )}
      {mayus(item) === "Womens-bags" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjElEQVR4nO2bz28NURTHbzWlkSolFupnGtEuWEi0WCCExD8gqYpEoho/YoPQtIlQPyrBikWbICFYFIlfiVAS7BBJQ8LCjiJ+/yrRqn7kynncTt/MvDfT1765nU9yNy/n3jnnO3fuu3POHaViYmIyCbAAOA08Azrxpwt4Ln0WqqgCjASOE56TQL6KEsAw4FKSYH4AH33a9yT9LusxVVQA1hvO9wBHgZI0+k+VPrpvgo0qKgD1huP1IcbZb4zzMjKzABgBbAM2ADkhxhkuC2KCOWqoAZw1BKhUQw2g2RCgZiAvnANUAFuAA4PY2gwBLgA70mg1QFmQ4GcD97GHWykLASwCOrCPz8A8v+DHAu+MTr9kE3JwkB+DIE37fEViSPAKGO0lwG7D+IMNfzuyjukdZoKdXsZthuFaZQnAOiOux16GHYbhBGUJQLHjbTPXzfAfyjLozShfI2UZsQC9iWeA8psmyjLiGdCbeAYov2miLCOeASnOgB7DqNWSd4FyicWkwM241WGoBWkBZqqIAcwCzjluquaeV6cCYJ/k751CXAOWqiwHWAZcTxL4T+AQMCaVQSZLRaabvjwBtusXDJUlABOBWuBpEn9/S2K1JMjA04FjLjU9Lc4NYJMuZGQkMm/fpgGb5bFNdqN0IuRUoJygE2ASsEcyKm48Ao4AK/UMUv0MMAWokmvoa7nxFmjUAgWt6RW7VWCAPGCF1P30M+XFe+AO0CSZ5SrJN5ZJ6asIKJRWJL+Vic0qYKukxO9KdsqLLkl/VeqiTJDY/gKclwFblA96MQHWSJ9PDDxfJU1eDYxLwV//2Pj/LHX7DejolwvMl4XoIvA6AwG/kbtcK2cO8tL00T82DNIZ3GUsPd0WS6X4MHAGuA20+wTaLocjGqW2uAQY3w/++MdGPwrgcQ1drfGiOUPXjQVIEE6lkMii5UWT7QIs9xGgznYB8h2HHkw6A21ZoySABpgrR16cm5nVKkNklQAa2f3p//QTwF6gVGWQrBNgoIkFMAinUkSJBTAIp1JEiQUwCKdSRIkFMAinUkSJBTAIp1JEiQUwCKeS5QJ8s/ScoC6dJfjiZfjQMKxWluBIxD7wMqwzDHU1pkJFHEm+mGeFa72MCx2ZGl1gvAo0pPmhQja0BvHdLJy+cD0d4jhdPRilrkyjYypXqQCUAjexB11Cn5FS8KqvEPqo+a4s+AAi3aZ91r57Bv4H9GANMO08viIAAAAASUVORK5CYII="}}  style={styles.image}  />      
        )}
      {mayus(item) === "Womens-jewellery" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nL3VS4hOYRgH8LnUjCmFGprUkAZlM5TEkFv5ErkUauSWaUZZ0CTjLhmFonFJslEslFCK3MpdIVY2doOFlY2sbX5680wdX9+ZORN56+285znP8/8/73M7VVX/a2E92lBbJp+AfRX2XjSV6dYGRnslgvThDN7gYsjq8AKfsBKf0Y91+IJHAw4lG7wOjLZKBA0YE7s5ZOfRjRN4h904iQ/owhH0Zm46YN9QiSAxP459BTX4Hl4l2Y94vsS3OL/HV1Tjasa+Ly8PSXEGOuN9DS7H+T5GY0HcIunexqL43hm21XngvRH/Syhl5BewEQewAoewDD3pnNErhW3COFqJoDGHuD7CshWn8QDLcTeFMcemIla5Ul3kZRum4G0k+mOcG3ELs4cEywFPJbgZCzEZG/xePzEXSzERD7F6uASppjdhfgA1ZOTdcV4VoUskr9BSFHzqwNWj+eoH0Z2De2jFtaIEZ8PzlMzxBfT7sDj0xxYheBoJvFPQodYI3f4UziIGzzErlWRBghGR6HZsL0owHecKEoxKt8UWdBQxSCOhKVVIQYLU3YdxCvOKGOxInkRcS0Po1sRwmxTN98e/JM9oZMyT5nhOy9Grjk7flWKfZtOQ4Bnj9HO5GR2ccnIwzftMly+JTu+JXngyWL/kkXREbbdEhVzHswjJ8SDvirIeNyzwDMnMILkRYGlMr8WxCF+62fA8zyFK8yYNvj3YGSGq+2vgf7F+AZe4W6V8bdfuAAAAAElFTkSuQmCC"}}  style={styles.image}  />      
        )}
      {mayus(item) === "Sunglasses" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO3TwUpUcRTH8RskDAjhTtMEaajtuJvtbERb6QOoiMtisufwBcKlOinlwojAQCqc1VSrfI+e4RMnzsDlcuduZhXMgcP9/3/3d773nvs/tyhmMYv/J/AAj/G0Jp9gruR9iMUJ3qU6+CF+4honNXmBr/ie+Q2XE7zB+IGDMbyLj1jAqwlF/exwBcu5fj3B+zJZwezGA9bxKd8oip5VWm7jLc5wm3meWrvijdqj7DiY6+MuAnzTcD49/MGjzFj3GvxfglkWVjFoKNjAcWl/HFqDfxCDUVSmYtRQ8Aa7pf1+aA3+UTCr4hU2a8zz+BUHV9IWUpuv8W/iQ1WMKfmMIfbQyknp5Ehu14B28l4nva3sbJis/tj4HL+xhvd4h7ts8zQADZ+ik9M1yppBMoJ5H9fyjxbgrWLKwItkHU7LmsUsin/xFwDHMdaNZ9HzAAAAAElFTkSuQmCC"}}  style={styles.image}  />     
       )}
      {mayus(item) === "Automotive" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO2YT0hUURTGJyM1tEKiNtpC+0cFrRJKqUWLamcUYhBUu8AW2aKVS0mLVkptaiEELURKIg0poqhlUBjRztxoSGVo4iL684uT32surzej8+bOjIv3g4GZ9+493/nmnXfveS+VSkhISEhIKBHAaqAJuAzcAkaB98A48FWfgOD3uMaMao7NPQCUlcLADqAX+Ig/poHbQGMxDKwF+oBfTgIfgH7gItAC7AUagE1ADbBKnxoda9CYFs2xuRMhU3eB9YUyYck8kNBPYAA45DH+QeAO8EMaLwpSbsBZp9abvAukdfYBM9I6VQiBVwp+znvw/7UuSOu578CNCvwJqPQaPFpvA7AgzV0+A9tqYnR7C7q0Zr80r/tcqWaB38BWL0GXp9ssI5+BCh8BzyjgUy8Z5qb9TtqtPoI9U7DTXrLLTbtD2k9ymXTMVglgPmLX/Q5UFzTr6Jw2SjvMvHI9Gp5wMrRbhxkutokA4FGWvCznE+7gNzrRBWzWsTVabo0bqRIB3FQOE8FObzkqV+O1Ozgop3rn2HHHua1a7cA2oKoIyVdJq13aAUecMfVBmbkTrd4yYW13qRnPci69+wPbgZGIG92aw1rdQ0PqdIMdt5AsSGtI2rXKxcVyHbYrl+3SXtLgkdQKgfRN35HLpDFNagXKgWsZHqK+AffsiuaRYB0wqFhhpoAe5WC5GGO5BA+oAK6yNNZ218YwsdNp2bPRrVz+krMRfbd/hahnENWu1akxEMPIfc19GPVHkO63psJ5xTESlNTuDGO36PxsDCNBOUVeTWCPTyN9Tvm0eTYyp7l1EefanLLr9WFknTVtTr2+BA7bA5ZuVFu2jcEYRmyhQOVpsSoV2zQCHgd9Xl5G9LsMOK9XNlHMZF3PM+vY/vUlQ8xpaf57AZG3Eed4NdAJvNWmNaelM2cToQVjQLEWFLszqtv2ZqTUENcIsD+1QmDxtWpsIyuSVAwjy9l1i8VMbCNxz8cF37pOW9KcpW2YzCPn4uiy2HEuxZUCGOnxqqu2ucf5h1wmLZiNKYCR8lLoJiQkJCQk/AHUdki5LDJmuwAAAABJRU5ErkJggg=="}}  style={styles.image}  />        
        )}     
      {mayus(item) === "Motorcycle" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEm0lEQVR4nO2YW4hVZRTHt2lNOY4XMnUyKpLKEho1KiMQp+wYQaRmvfXUS0SWTVdvhFYvkWQI0aQTXSjFid4kEGWcsSgvaEY1Q0YJQZqGo45mlvWLhf/PVttz9vnOnHnwwP7DgVnfZa297uubJMmRI0eOHDlqBMAU4HXga+AU0AUMTmoFwEigneKYm9QKgN366OPASuAe4BWtbUhqBcA2hdNEt3a1FPkHuCypVQAFF16PAE8Cm4F9wF/AAaANaEjOV8gb3U4R80optCbnA4Am4CXgM+AH5UlAyB3DduAh4HLgQmCW1n+sVOBg4D7gLWCXXHvSCepTnL8L3BDB71LgwxJW/g1408IG+FZrN6XuX6n1XypRYjrwPfEwpSZl8LtECW44CCwDbgeusL3UWesrhk9UzexMXcUeAe5WczJ8AzwNTLNKYgx1pk4Wngx8oLNmycYSPJfqzHflKhJwbxmjtcYqEpKuAxgRcb5OoWf4HXgPeBiYCoyXAcwLhjsj+Jn3jur8Pgsl4DSwH1gDDItV5IsMa5wA9gCrzBvujrl/UxlLbo+UP9qF9dtRH51hkWeBHcCRMh/3vvcacB2wSOOHhdoh4A9gr1c8Q/YE4GfH/yQwpt/KZAiqB27TOHHExX3VwoCxlsjiuUUDpGHZQHddi88e1X37HeY/WLjVVymj3SlxMdAs+qDkr1bxOSr5PVorxDCfqMYVg1VVKDFDPA77yseZphiDrX5uSzNvduFjFWOhunK9fpOVD9Yow1gxq5+KhEb5XKqX9bmPXSmZDZLflJJv39pczBNBiY+ywkaM1zpmZbt86v5FSuo/Q64BN7rRpS+rglk5dvJ7/+cZuQpZapDW5ikBj6sMWyzP1N4gYJ3udIY7kYpM0r1doi9w4dwO3Kw+8rdawwl9Q2d4hEl+UGZrepzeH5qP3FoKy3VmhHPzXRUo8mAwmuiZoo3XSK19niF/hfNMkF9IVJ0MC50nkPsXAOM0njyhHmG4X2dfFL2mAkUe0503RL8jeqlom4A9XrOCADzlhtg5OrtY9OpEZe3s9Onq+YIiH/G49jpF3yJ6TwWKPKo7baKtxBqaUvLXKbwszKZrr0V7W0RbATD0GHFMRAirkGzjFItfUR5mqWmRijygO+tFhzlreEq+jS4v628LoavkGcMxV3jO0BmKNCoRw4BYDlaOvwRe0Dh+DTBKPMcoiZ8BfkrFepb8IcCn7hE2PkuRdGhZdTC0FLHm/FRo3So6VLZY7A7jfTn5wHBgp16Xz2uvQ3vWZ86GVkj2Rdqc68KlRZYZrX8OnEol+3LRrcBQYLYq3kbNUWGsOaQZrU3FZIgzToz8Rnk6XWyW+GQvuDgM7l0RUX5HuXfHjNhkL+LlSuW/6sLqV60V0g1xrWuIc/TYCkOjb4j2vv/Yh1k1iJTf4TzhG3JXekTpdcxKvsoUs+t11irOhAFQpBL5DU4Ju3N91tB4QM1mijpoGBoXu25qStxRrRKR8ofp7yUunHrPGRpTlgluzoKduXaglOiH/K5zPFGCYXjYdLsY7VGFiZ6rqlCoUER+d/TDKkeOHDly5MiR1Db+Bbx8g1pNMNOtAAAAAElFTkSuQmCC"}}  style={styles.image}  />       
        )}
      {mayus(item) === "Lighting" && (
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVR4nO2Zy2oUQRSGa2PGjYl4zyTu1AcQXbjQtYJozFs4k7gRiQvdCKJmo08RGULiwrjTSMQxFzRx4w3UlbrRgFGJipdPivmHKca+TffE6Zb+oSBU1fnmnDpV1ac7xuT6z0VEmbQL+BIhjs8m7QKm5eykx9gNjd02aRdwyFn5q8B2tWvq+w0cNFkQcFYON8v2jZgsCTjibDOrO8Bhk1WRlVsqTHkgaVOekbQpz0jalGckbcozkjZ1LCNAARgG5vSSZNssMAR0RWR0af4Dp2i0f5dbYBRi+wH0AY8D3uwWgWIIoxdYCmH0rpkf1FagbvwEOA5sUBsAnmnskd+KiLEUgWEdKayJH8ApTXgKbAWuAO+c8R4HUvZxohXGUBsYZS/AvAbtClyu57Bpzgl1z/o4sdACY86HMZ/ID/tlQ4M2hW/194GmOd3q/xTyBSUKw/NLCkn9cJ3w+gEnrUFOdJ5BI6UDAYDBkK3VeQaNQ2YPUo/H+EbgheaUfH5g+B8zymFX53MdqG61Qcc47Ppd7DTD6GFWh3jpIbDD0zhlDKPyogRUnY9stjQ42WKJUpKdW6IkZVTFWBeF4cLq119fS4YN+37HiaSMN3Hs65C7ghyNaX/MCSQpYzqOfR1yRpCxmPYVJ5CkjNNx7N0q9CvwE9jbou1+4BfwXS0JYzWs6o4Cu6gVeQlsi2hj/43wWna2XhpNyLiQKAgB1wP3HUcCVxXYB7xybruCGAsxGff8Sv44wWxx3vZsqsd0CIu6JouqVq9rHL3ZbXIYm51gojKq1q4tQTiOdGmb2DMTpG96h/hrFZWdUZ2ZIK0Cl6I+c0yCe30EmNFz5gfwXlvgnB135o3bUlttAtitsZ3Aedl8EMOyZsSO9cxpuxTEssdKL6fGyShSJqxu6gq3bUp9FZMVUdtKuKuv7WT10WRFwIqc7s96IBNyekrnxbZb6hs3WRGwR7eR12HfZbIkage8om22ogsgW0HkMvH1B7HgrbK7ud6+AAAAAElFTkSuQmCC"}}  style={styles.image}  />        )
        }
      <Text style={styles.text}>{mayus(item)}</Text>
    </Pressable>
  );
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lilac,
        width: 125,
        height: 100,
        margin: 8,
        padding: 4,
        textAlign: 'center',
        borderRadius: 15,
        // SOMBRA ANDROID,
        shadowRadius: 1,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        gap: 10
      
    },
    text: {
      color: "white",
      fontFamily: 'PoppinSemiRegular',
      textAlign: 'center',
      fontSize: 12
      
    },
    image: {
      width: 26,
      height: 26,
      resizeMode: 'cover', 
    },
})