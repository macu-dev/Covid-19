export class Covid {
  constructor(){}

  async _get(url){
    let response = await fetch(url);
    return await response.json() ;
  }

  async get_Global() {
   return await this._get("https://covid19.mathdro.id/api");
  }
  async get_countries(){
    return await this._get("https://covid19.mathdro.id/api/countries");
  }

  async get_country(countryCode){
    return await this._get(`https://covid19.mathdro.id/api/countries/${countryCode}`);
  }

}