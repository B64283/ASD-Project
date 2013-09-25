function(doc) {
  if (doc._id.substr(0, 5)=== "plan:") {
    emit(doc._id.substr(5),{
    "Destination": doc.Destination,
    "startdate": doc.startdate,
    "enddate": doc.enddate,
    "notes": doc.notes,
    "Category": doc.Category
    });
  }
};