function(doc) { if (doc.is_course !== 'Yes' & doc.is_verified === true) { emit(doc.c_id, doc)}}