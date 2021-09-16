<template>
  <div v-if="this.nomEquipo.length>0">
    <label>Nombre del Equipo Consultado:</label>
    <span>{{ nomEquipo }}</span>
    <button @click="getTeams()">Buscar informaci&oacute;n</button>
    
        <h3>Primer coincidencia</h3>
    <ul id="ulTeam">
      <li class="liTeam"><span>Equipo:</span> {{ equipo }}</li>
      <li class="liTeam"><span>Nombre corto:</span> {{ nombreCorto }}</li>
      <li class="liTeam">
        <span>Año de Formacion:</span> {{ anioFormacion }}
      </li>
      <li class="liTeam"><span>Deporte:</span> {{ deporte }}</li>
      <li class="liTeam"><span>Liga:</span> {{ liga }}</li>
    </ul>

    <div id="divTblTeams">
        <h3>Informaci&oacute;n completa</h3>
      <table>
        <thead>
          <tr>
            <th class="thStyle thEquipo">Equipo</th>
            <th class="thStyle thNombreCorto">Nombre corto</th>
            <th class="thStyle thAnioForm">Año de Formacion</th>
            <th class="thStyle thDeporte">Deporte</th>
            <th class="thStyle thLiga">Liga</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, idx) in teams" :key="idx">
            <td class="tdStyle tdEquipo"> {{team.strTeam}} </td>
            <td class="tdStyle tdNombreCorto"> {{team.strTeamShort}} </td>
            <td class="tdStyle tdAnioForm"> {{team.strFormedYear}} </td>
            <td class="tdStyle tdDeporte"> {{team.strSport}} </td>
            <td class="tdStyle tdLiga"> {{team.strLeague}} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
//   props: ["nomEquipo"],
  props: {
      nomEquipo: {
          type: String,
          required: true,
        //   default: ''// aqui no se ocupa, porque no se utiliza el valor por defecto
      }
  },
  data() {
    return {
      //   nomEquipo: 0,
      teams: [],
      result: [],
      equipo: "",
      nombreCorto: "",
      anioFormacion: "",
      deporte: "",
      liga: "",
    };
  },
  methods: {
    async getTeams() {
      return axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.nomEquipo}`
        )
        .then((response) => {
          this.result = response;
          this.teams = response.data.teams;
          let team = response.data.teams[0];
          this.equipo = team.strTeam;
          this.nombreCorto = team.strTeamShort;
          this.anioFormacion = team.strFormedYear;
          this.deporte = team.strSport;
          this.liga = team.strLeague;
          console.log(team);
          console.log(response);
          console.log(this.teams);
        });
    },
  },
  //   watch: {
  //       nomEquipo: async function(newVal, oldVal){
  //           console.log('Prop changed: ', newVal, 'was: ', oldVal)
  //           await this.getTeams()
  //       }
  //   },
};
</script>

<style>
table {
    border-collapse: collapse;
    border-spacing: 0px;
    border: 1px solid #b9c1bf;
}
thead {
    background-color: #94ecd0;
}
td {
    border: 1px solid #b9c1bf;
}
ul#ulTeam {
    max-width: 300px;
    text-align: left;
    color: #266326;
    font-size: 16px;
}

</style>

//  "idTeam": "134880",
//             "idSoccerXML": null,
//             "idAPIfootball": "132",
//             "intLoved": "1",
//             "strTeam": "Atlanta Hawks",
//             "strTeamShort": "ATL",
//             "strAlternate": "",
//             "intFormedYear": "1946",
//             "strSport": "Basketball",
//             "strLeague": "NBA",
//             "idLeague": "4387",