import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
//
import React from 'react';
import { Button } from '@strapi/design-system/Button';
import { useNotification } from '@strapi/helper-plugin';

const ExportButton = () => {
  const toggleNotification = useNotification();
  const handleExport = async () => {
    try {
      const aurl = `/export-data/user`;
      const response = await fetch(aurl);
      if (!response.ok)
        throw new Error('Failed to export csv');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'users.csv';
      link.click();
      window.URL.revokeObjectURL(url);
      toggleNotification({ type: 'success', message: 'CSV exported successfully' });
    } catch (error) {
      toggleNotification({ type: 'warning', message: 'CSV export failed!' });
    }
  };
  return (
    <Button onClick = { handleExport } variant = "secondary">Export to CSV</Button>
  );
};
//
const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import('./pages/App');

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
    //
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'export-data',
      Component: ExportButton
    })
    //
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
