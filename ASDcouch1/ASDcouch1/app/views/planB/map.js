function(doc) {
  if (doc._id.substr(0, 6)=== "planB:") {
    emit(doc._id.substr(6),{
    "Destination": doc.Destination,
    "startdate": doc.startdate,
    "enddate": doc.enddate,
    "notes": doc.notes,
    "Category": doc.Category
    });
  }
};