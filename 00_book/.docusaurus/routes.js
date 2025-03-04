import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '99b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '93b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '055'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5fb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '30b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8a2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1bc'),
    exact: true
  },
  {
    path: '/insomnia-files',
    component: ComponentCreator('/insomnia-files', '04f'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '70b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd17'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c33'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '74f'),
            routes: [
              {
                path: '/docs/course_intro/',
                component: ComponentCreator('/docs/course_intro/', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/course_intro/how_to_install_ide/',
                component: ComponentCreator('/docs/course_intro/how_to_install_ide/', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/course_intro/how_to_install_python/',
                component: ComponentCreator('/docs/course_intro/how_to_install_python/', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/course_intro/what_is_rest_api/',
                component: ComponentCreator('/docs/course_intro/what_is_rest_api/', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/create_render_web_service/',
                component: ComponentCreator('/docs/deploy_to_render/create_render_web_service/', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/deploy_postgresql_database/',
                component: ComponentCreator('/docs/deploy_to_render/deploy_postgresql_database/', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/docker_with_gunicorn/',
                component: ComponentCreator('/docs/deploy_to_render/docker_with_gunicorn/', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/environment_variables_and_migrations/',
                component: ComponentCreator('/docs/deploy_to_render/environment_variables_and_migrations/', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/run_everything_docker_compose/',
                component: ComponentCreator('/docs/deploy_to_render/run_everything_docker_compose/', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_to_render/section_overview/',
                component: ComponentCreator('/docs/deploy_to_render/section_overview/', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/',
                component: ComponentCreator('/docs/docker_intro/', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/in_depth_docker_tutorial/',
                component: ComponentCreator('/docs/docker_intro/in_depth_docker_tutorial/', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/run_commands_in_docker_containers/',
                component: ComponentCreator('/docs/docker_intro/run_commands_in_docker_containers/', '4fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/run_docker_container/',
                component: ComponentCreator('/docs/docker_intro/run_docker_container/', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/run_with_docker_compose/',
                component: ComponentCreator('/docs/docker_intro/run_with_docker_compose/', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docker_intro/what_is_docker_container/',
                component: ComponentCreator('/docs/docker_intro/what_is_docker_container/', '2c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/creating_items/',
                component: ComponentCreator('/docs/first_rest_api/creating_items/', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/creating_stores/',
                component: ComponentCreator('/docs/first_rest_api/creating_stores/', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/final_code/',
                component: ComponentCreator('/docs/first_rest_api/final_code/', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/first_rest_api_endpoint/',
                component: ComponentCreator('/docs/first_rest_api/first_rest_api_endpoint/', '342'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/getting_set_up/',
                component: ComponentCreator('/docs/first_rest_api/getting_set_up/', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/make_request_to_rest_api/',
                component: ComponentCreator('/docs/first_rest_api/make_request_to_rest_api/', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/project_overview/',
                component: ComponentCreator('/docs/first_rest_api/project_overview/', 'd91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/return_data_from_rest_api/',
                component: ComponentCreator('/docs/first_rest_api/return_data_from_rest_api/', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first_rest_api/what_is_json/',
                component: ComponentCreator('/docs/first_rest_api/what_is_json/', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/flask_jwt_extended_setup/',
                component: ComponentCreator('/docs/flask_jwt_extended/flask_jwt_extended_setup/', '81a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/how_is_jwt_used/',
                component: ComponentCreator('/docs/flask_jwt_extended/how_is_jwt_used/', 'f3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/insomnia_request_chaining/',
                component: ComponentCreator('/docs/flask_jwt_extended/insomnia_request_chaining/', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/jwt_claims_and_authorization/',
                component: ComponentCreator('/docs/flask_jwt_extended/jwt_claims_and_authorization/', '8c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/login_users_rest_api/',
                component: ComponentCreator('/docs/flask_jwt_extended/login_users_rest_api/', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/logout_users_rest_api/',
                component: ComponentCreator('/docs/flask_jwt_extended/logout_users_rest_api/', 'fd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/protect_resources_with_jwt_required/',
                component: ComponentCreator('/docs/flask_jwt_extended/protect_resources_with_jwt_required/', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/registering_users_rest_api/',
                component: ComponentCreator('/docs/flask_jwt_extended/registering_users_rest_api/', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/section_changes/',
                component: ComponentCreator('/docs/flask_jwt_extended/section_changes/', 'fdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/token_refreshing_flask_jwt_extended/',
                component: ComponentCreator('/docs/flask_jwt_extended/token_refreshing_flask_jwt_extended/', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/user_model_and_schema/',
                component: ComponentCreator('/docs/flask_jwt_extended/user_model_and_schema/', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_jwt_extended/what_is_a_jwt/',
                component: ComponentCreator('/docs/flask_jwt_extended/what_is_a_jwt/', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_migrate/add_flask_migrate_to_app/',
                component: ComponentCreator('/docs/flask_migrate/add_flask_migrate_to_app/', '585'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_migrate/change_models_generate_alembic_migration/',
                component: ComponentCreator('/docs/flask_migrate/change_models_generate_alembic_migration/', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_migrate/initialize_database_flask_db_init/',
                component: ComponentCreator('/docs/flask_migrate/initialize_database_flask_db_init/', '136'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_migrate/manually_review_modify_migrations/',
                component: ComponentCreator('/docs/flask_migrate/manually_review_modify_migrations/', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_migrate/why_use_database_migrations/',
                component: ComponentCreator('/docs/flask_migrate/why_use_database_migrations/', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/api_with_method_views/',
                component: ComponentCreator('/docs/flask_smorest/api_with_method_views/', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/data_model_improvements/',
                component: ComponentCreator('/docs/flask_smorest/data_model_improvements/', '91b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/decorating_responses/',
                component: ComponentCreator('/docs/flask_smorest/decorating_responses/', '1a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/improvements_on_first_rest_api/',
                component: ComponentCreator('/docs/flask_smorest/improvements_on_first_rest_api/', '98d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/marshmallow_schemas/',
                component: ComponentCreator('/docs/flask_smorest/marshmallow_schemas/', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/new_endpoints_for_api/',
                component: ComponentCreator('/docs/flask_smorest/new_endpoints_for_api/', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/reload_api_docker_container/',
                component: ComponentCreator('/docs/flask_smorest/reload_api_docker_container/', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/validation_with_marshmallow/',
                component: ComponentCreator('/docs/flask_smorest/validation_with_marshmallow/', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flask_smorest/why_flask_smorest/',
                component: ComponentCreator('/docs/flask_smorest/why_flask_smorest/', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git_crash_course/',
                component: ComponentCreator('/docs/git_crash_course/', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python_refresher/',
                component: ComponentCreator('/docs/python_refresher/', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/conclusion/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/conclusion/', 'f3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/configure_flask_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/configure_flask_sqlalchemy/', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/create_simple_sqlalchemy_model/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/create_simple_sqlalchemy_model/', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/delete_models_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/delete_models_sqlalchemy/', '200'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/delete_related_models_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/delete_related_models_sqlalchemy/', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/get_models_or_404/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/get_models_or_404/', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/insert_models_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/insert_models_sqlalchemy/', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/one_to_many_relationships_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/one_to_many_relationships_sqlalchemy/', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/project_overview_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/project_overview_sqlalchemy/', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/retrieve_list_all_models/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/retrieve_list_all_models/', '94f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_storage_sqlalchemy/updating_models_sqlalchemy/',
                component: ComponentCreator('/docs/sql_storage_sqlalchemy/updating_models_sqlalchemy/', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sqlalchemy_many_to_many/many_to_many_relationships/',
                component: ComponentCreator('/docs/sqlalchemy_many_to_many/many_to_many_relationships/', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sqlalchemy_many_to_many/one_to_many_review/',
                component: ComponentCreator('/docs/sqlalchemy_many_to_many/one_to_many_review/', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sqlalchemy_many_to_many/section_changes/',
                component: ComponentCreator('/docs/sqlalchemy_many_to_many/section_changes/', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/deploy_background_worker_render/',
                component: ComponentCreator('/docs/task_queues_emails/deploy_background_worker_render/', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/populate_rq_task_queue/',
                component: ComponentCreator('/docs/task_queues_emails/populate_rq_task_queue/', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/rq_background_worker/',
                component: ComponentCreator('/docs/task_queues_emails/rq_background_worker/', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/send_email_user_registration/',
                component: ComponentCreator('/docs/task_queues_emails/send_email_user_registration/', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/send_emails_python_mailgun/',
                component: ComponentCreator('/docs/task_queues_emails/send_emails_python_mailgun/', '93f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/sending_html_emails/',
                component: ComponentCreator('/docs/task_queues_emails/sending_html_emails/', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_queues_emails/what_is_task_queue/',
                component: ComponentCreator('/docs/task_queues_emails/what_is_task_queue/', '62e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '50e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
