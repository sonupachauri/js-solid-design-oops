// Dependency Inversion principle

class FileSystem {
    writeToFile(data) {
      // Implementation
    }
  }
  
  class ExternalDB {
    writeToDatabase(data) {
      // Implementation
    }
  }
  
  class LocalPersistance {
    push(data) {
      // Implementation
    }
  }
  
  class PersistanceManager {
    saveData(db, data) {
      if (db instanceof FileSystem) {
        db.writeToFile(data)
      }
  
      if (db instanceof ExternalDB) {
        db.writeToDatabase(data)
      }
  
      if (db instanceof LocalPersistance) {
        db.push(data)
      }
    }
  }

//In this case, a high-level module PersistanceManager depends on the low-level modules, which are FileSystem, ExternalDB, and LocalPersistance.

class FileSystem {
    save(data) {
      // Implementation
    }
  }
  
  class ExternalDB {
    save(data) {
      // Implementation
    }
  }
  
  class LocalPersistance {
    save(data) {
      // Implementation
    }
  }
  
  class PersistanceManager {
    saveData(db, data) {
      db.save(data)
    }
  }