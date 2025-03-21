const toggle = (id) => {
  let commentSection = document.getElementById('comments' + id);
  commentSection.style.display = (commentSection.style.display === 'none' || commentSection.style.display === '') ? 'block' : 'none';
};
