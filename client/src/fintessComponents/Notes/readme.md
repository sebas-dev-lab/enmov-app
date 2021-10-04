# FITNESS COMPONENTS NOTES

## ESTRUCTURA -> FIRST STEP

> Login

    - Users
        -- Admin        // Administracion de todo el servicio
        -- Moderator    // Acceso y seguimiento para gestion de rutinas y seguimiento de instructores
        -- Instructor   // Desarrollo de rutinas y seguimiento para trained

        // Notes: Primera etapa solo con fines relacionales. Se crea en dashboard
        -- Trained

```
/*
    ================= Gym Admin users =================
*/
                {
                    id,
                    name,
                    lastname,
                    username,
                    dni,
                    description,
                    status,
                    role{
                        enum:[admin, moderator, instructor]
                    },
                    contact_info:{
                        email,
                        phone,
                        address,
                    },
                    healt_condition:{
                        healt_start_condition:{
                            nutritional:id_nutritional,
                            basic_form_healt:id_basic_healt,
                            healt_certified_status,
                            last_healt_information
                        }
                    },
                    social_info:{
                        facebook,
                        google,
                    },
                    financial_contract_info:id_financial_statics

                }

/*
    ================= Trained =================
*/
                {
                    id,
                    name,
                    lastname,
                    dni,
                    description,
                    contact_info:{
                        email,
                        phone,
                        address,
                    },
                    healt_condition:{
                        healt_start_condition:{
                            nutritional:id_nutritional,
                            basic_form_healt:id_basic_healt,
                            healt_certified_status,
                            last_healt_information
                        }
                    },
                    social_info:{
                        facebook,
                        google,
                    },
                    status_trained:{
                        type:[common, pt, pdayi, smpt], //<*>
                        cuote,
                        start_date,
                        type_pay:{
                            enum:[month_pay, week_pay, day_pay]
                        },
                        pays:{
                            month_pay:[],
                            week_pay:[],
                            day_pay:[],
                        },
                        status,
                    }
                    instructor_in_charge,
                }

            /*<*>
                common: Usuarion comun
                pt: Usuario con servicio de entrenameinto personalizado
                pdayi: Usuario con servicio de entrenamiento independiente y pago por dia
                smpt: Usuario con servicio de entrenamiento semi personalizado
            */
```

> Dashboard

    - Rutinas
        -- Crear / editar: Ejercicios

```
                {
                    id,
                    exercise,
                    description,
                    image,
                    video,
                    icon,
                    kgs, //**
                    repetitions, //Repeticiones
                }
```

        -- Crear / editar: Series

```
                {
                    id,
                    order, // orden disposicion de series
                    exercises:{
                        [order]:{exercise.id}
                    },
                    time_rest_be:, //Tiempo de descanso entre ejercicios
                }
```

        -- Crear / editar: Rutinas de fuerza

```
                {
                    id,
                    title,
                    description,
                    type:{
                        enum:[aa, fr, fh, fm] //*
                    },
                    intensity,
                    structure:{
                        series:[order_series]:{serie_id}
                        time_res_bs, //Tiempo de descanso entre series
                    }
                    creator, //***
                    instructorDesigned, //***
                    trainedDesigned, //****
                    createdAt,
                    editedAt,
                    status,
                }

                //* aa= adaptacion anatomica, fr=fuerza con resistencia, fh=fuerza con hipertrofia, fm=fuerza maxima
                //** [kg1,...,kgi] => if need one kg [kg] else [kg1,kg2,...,kgi]
                //*** May be Instructor, Moderator, admin id.
                //**** Trained Id.

```
    -- Lista de rutinas

```
                > Listar rutinas
                > Asignar rutinas a instructor y trained
                > Acceso a detalles y estructura de rutinas
```

    -- Lista de traineds

```
                > Listar traineds
                > Asignar rutinas e instructor
                > Acceso a detalles de alumno
```

    -- Financial and contracts analitics per instructor
```
                {
                    id,
                    instructor,
                    financial_info:{
                        number_traineds_in_charge:{
                            common_trained_in_charge{
                                num,
                                status,
                                cuote
                            },
                            pt_trained_in_charge:{
                                num,
                                status,
                                cuote
                            },
                            smpt_trained_in_charge:{
                                num,
                                status,
                                cuote
                            },
                            pdayi_trained_in_charge:{
                                num,
                                status,
                                cuote
                            },
                        },
                        type_of_contracts:{
                            type,
                            basic_salary:{
                                salary,
                                persent,
                            },
                            contract_payment:{
                                salary,
                                persent,
                            },                             
                        },                   
                    },
                    confidentian_contract:{
                        status
                        document_img,
                        document_url,
                    },
                    work_contract:{
                        status,
                        document_img,
                        document_url,
                    }

                }
```
