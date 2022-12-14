```mermaid
erDiagram
  Instructors ||--o{ SeminarsInstructors: ""
  Instructors ||--o{ InstructorTransactions: ""
  InstructorTransactions ||--o| InstructorTransactionsSeminars: ""
  TransactionItemTypes ||--o{ InstructorTransactions: ""
  Instructors{
    string id PK
    string name "NOT NULL"
    string mail_address "NOT NULL"
    string phone_number "NOT NULL"
    bool is_mail_address_verified "NOT NULL"
    bool is_phone_number_verified "NOT NULL"
    float avg_rating_float "NOT NULL"
    string sex "NOT NULL"
    string icon_img_url "NOT NULL"
    string hitokoto
    string self-introduction
    string sns_link
    string specialty
  }
  InstructorTransactions{
    int id PK "NOT NULL"
    int amount_coin "NOT NULL"
    int amount_yen "NOT NULL"
    bool is_payment "NOT NULL"
    string summary "NOT NULL"
    int transaction_item_type_id FK "NOT NULL"
  }
  TransactionItemTypes{
    int id PK "NOT NULL"
    string item_name "NOT NULL"
  }

  Seminars ||--o{ SeminarsInstructors: ""
  Seminars ||--o{ RatingsToSeminar: ""
  Seminars ||--o{ SeminarsUsers: ""
  Seminars ||--o{ SeminarSchedules: ""
  Seminars ||--|{ InstructorTransactionsSeminars: ""
  Seminars ||--|{ UserTransactionsSeminars: ""
  Seminars{
    int id PK "NOT NULL"
    datetime start_datetime "NOT NULL"
    datetime end_datetime "NOT NULL"
    string video_chat_url "NOT NULL"
    string title "NOT NULL"
    int price "NOT NULL"
    string summary
    string content
    string thumbnail_img_url
    bool is_application_needed "NOT NULL"
  }
  SeminarsInstructors{
    int id PK "NOT NULL"
    int seminar_id FK "NOT NULL"
    int instructor_id FK "NOT NULL"
  }
  RatingsToSeminar{
    int id PK "NOT NULL"
    int to_seminar_id FK "NOT NULL"
    string from_user_id FK "NOT NULL"
    int score "NOT NULL"
    string comment
  }
  SeminarsUsers{
    int id PK "NOT NULL"
    int seminar_id FK "NOT NULL"
    string user_id FK "NOT NULL"
  }
  SeminarSchedules{
    int id PK "NOT NULL"
    int seminar_id FK "NOT NULL"
    datetime start_datetime "NOT NULL"
    datetime end_datetime "NOT NULL"
  }
  InstructorTransactionsSeminars{
    int id PK "NOT NULL"
    int instructor_transaction_id FK "NOT NULL"
    int seminar_id FK "NOT NULL"
  }

  Users ||--o{ SeminarsUsers: ""
  Users ||--o{ RatingsToSeminar: ""
  Users ||--o{ RatingsToUser: ""
  Users ||--o{ RequestsUsers: ""
  Users ||--o{ ChatMessages: ""
  Users ||--o{ ChatRoomsUsers: ""
  LivingArea ||--o{ Users: ""
  Users ||--o{ UserTransactions: ""
  UserTransactions ||--o| UserTransactionsSeminars: ""
  TransactionItemTypes ||--o{ UserTransactions: ""
  Users{
    string id PK
    string password_hashed "NOT NULL"
    string name "NOT NULL"
    string mail_address "NOT NULL"
    string phone_number "NOT NULL"
    bool is_mail_address_verified "NOT NULL"
    bool is_phone_number_verified "NOT NULL"
    float avg_rating_float "NOT NULL"
    string sex "NOT NULL"
    string icon_img_url "NOT NULL"
    string job "NOT NULL"
    date birthday "NOT NULL"
    int living_area_id FK
    string self-introduction
  }
  LivingArea{
    int id PK "NOT NULL"
    string name "NOT NULL"
    double lat "NOT NULL"
    double lng "NOT NULL"
  }
  RatingsToUser{
    int id PK "NOT NULL"
    string to_user_id FK "NOT NULL"
    string from_user_id FK "NOT NULL"
    int score "NOT NULL"
    string comment
  }
  RequestsUsers{
    int id PK "NOT NULL"
    int request_id FK "NOT NULL"
    string user_id FK "NOT NULL"
    bool is_requesting_user "NOT NULL"
  }
  ChatMessages{
    int id PK "NOT NULL"
    int chat_room_id FK "NOT NULL"
    int user_id FK "NOT NULL"
    string message "NOT NULL"
  }
  ChatRoomsUsers{
    int id PK "NOT NULL"
    string user_id FK "NOT NULL"
    int chat_room_id FK "NOT NULL"
  }
  UserTransactions{
    int id PK "NOT NULL"
    int amount_yen "NOT NULL"
    int amount_coin "NOT NULL"
    bool is_payment "NOT NULL"
    string summary "NOT NULL"
    int transaction_item_type_id FK "NOT NULL"
  }
  UserTransactionsSeminars{
    int id PK "NOT NULL"
    int user_transaction_id FK "NOT NULL"
    int seminar_id FK "NOT NULL"
  }
  ChatRooms ||--o{ ChatRoomsUsers: ""
  ChatRooms ||--o{ ChatMessages: ""
  Requests{
    int id PK "NOT NULL"
  }
  ChatRooms{
    int id PK "NOT NULL"
  }
```
