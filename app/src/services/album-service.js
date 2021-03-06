albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl){

  const photoUrl = apiUrl + '/photos';

  return {
    get(albumId){
      return $http
      .get(photoUrl + '/' + albumId)
      .then( result => result.data);
    },
    add(data){
      return $http
      .post(photoUrl, data)
      .then( result => result.data);
    },
    remove(id){
      const deleteUrl = photoUrl + '/' + id;
      return $http
      .delete(deleteUrl)
      .then( result => result.data);
    }
  };
}
