const isValid = async (title, id ) => {
  if(!title ||  title.length < 3)return false;
  if(!id || !( await getByAuthorId(id)))return false;
  return true;
}

module.exports = {isValid}