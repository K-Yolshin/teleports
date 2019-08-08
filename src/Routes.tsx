import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import StepByStep from '@/containers/common/StepByStep';

import SignUpHome from '@/views/signUp/Home';
import SignUpByPhone from '@/views/signUp/ByPhone';
import SignUpConfirm from '@/views/signUp/Confirm';
import SignUpStart from '@/views/signUp/Start';
import SignUpCompany from '@/views/signUp/Company';
import SignUpNotifications from '@/views/signUp/Notifications';
import SignUpTaxes from '@/views/signUp/Taxes';
import SignUpProfile from '@/views/signUp/Profile';
import SignUpTariffs from '@/views/signUp/Tariffs';
import SignUpFinish from '@/views/signUp/Finish';

import SignInHome from '@/views/signIn/Home';
import SignInByEmail from '@/views/signIn/ByEmail';
import SignInByPhone from '@/views/signIn/ByPhone';
import SignInConfirm from '@/views/signIn/Confirm';
import SignInProfiles from '@/views/signIn/Profiles';

import RestoreByPhone from '@/views/restore/ByPhone';
import RestoreConfirm from '@/views/restore/Confirm';
import RestoreBySupport from '@/views/restore/BySupport';

/**
 * Component which contains a routes of the application.
 */
function Routes() {
  return (
    <Switch>
      <Redirect
        path="/"
        to="/sign-in"
        exact={true}
      />

      <Route
        component={SignUpHome}
        path="/sign-up/"
        exact={true}
      />
      <Redirect
        path="/sign-up/:type"
        to="/sign-up/:type/by-phone"
        exact={true}
      />
      <StepByStep path="/sign-up/:type/by-phone">
        <Route
          component={SignUpByPhone}
          path="/sign-up/:type/by-phone"
          exact={true}
        />
        <Route
          component={SignUpConfirm}
          path="/sign-up/:type/by-phone/confirm"
          exact={true}
        />
      </StepByStep>

      <Route
        component={SignInHome}
        path="/sign-in"
        exact={true}
      />
      <Redirect
        path="/sign-in/:type"
        to="/sign-in/:type/by-phone"
        exact={true}
      />
      <Route
        component={SignInByEmail}
        path="/sign-in/:type/by-email"
        exact={true}
      />
      <StepByStep path="/sign-in/:type/by-phone">
        <Route
          component={SignInByPhone}
          path="/sign-in/:type/by-phone"
          exact={true}
        />
        <Route
          component={SignInConfirm}
          path="/sign-in/:type/by-phone/confirm"
          exact={true}
        />
      </StepByStep>

      <Redirect
        path="/sign-in-info"
        to="/sign-in-info/profiles"
        exact={true}
      />
      <Route
        component={SignInProfiles}
        path="/sign-in-info/profiles"
        exact={true}
      />

      <Redirect
        path="/restore"
        to="/restore/by-phone"
        exact={true}
      />
      <StepByStep path="/restore/by-phone">
        <Route
          component={RestoreByPhone}
          path="/restore/by-phone"
          exact={true}
        />
        <Route
          component={RestoreConfirm}
          path="/restore/by-phone/confirm"
          exact={true}
        />
      </StepByStep>
      <Route
        component={RestoreBySupport}
        path="/restore/by-support"
        exact={true}
      />

      <Redirect
        path="/sign-up-info"
        to="/sign-up-info/start"
        exact={true}
      />
      <StepByStep path="/sign-up-info">
        <Route
          component={SignUpStart}
          path="/sign-up-info/start"
          exact={true}
        />
        <Route
          component={SignUpCompany}
          path="/sign-up-info/company"
          exact={true}
        />
        <Route
          component={SignUpNotifications}
          path="/sign-up-info/notifications"
          exact={true}
        />
        <Route
          component={SignUpTaxes}
          path="/sign-up-info/taxes"
          exact={true}
        />
        <Route
          component={SignUpProfile}
          path="/sign-up-info/profile"
          exact={true}
        />
        <Route
          component={SignUpTariffs}
          path="/sign-up-info/tariffs"
          exact={true}
        />
        <Route
          component={SignUpFinish}
          path="/sign-up-info/finish"
          exact={true}
        />
      </StepByStep>
    </Switch>
  );
}

// Export.
export default Routes;
